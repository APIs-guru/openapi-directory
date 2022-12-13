package utils

import (
	"context"
	"fmt"
	"reflect"
	"strings"
)

func GenerateURL(ctx context.Context, serverURL, path string, pathParams interface{}) string {
	url := strings.TrimSuffix(serverURL, "/") + path

	pathParamsStructType := reflect.TypeOf(pathParams)
	pathParamsValType := reflect.ValueOf(pathParams)

	parsedParameters := map[string]string{}

	for i := 0; i < pathParamsStructType.NumField(); i++ {
		fieldType := pathParamsStructType.Field(i)
		valType := pathParamsValType.Field(i)

		ppTag := parseParamTag(pathParamTagKey, fieldType, "simple", false)
		if ppTag == nil {
			continue
		}

		// TODO: support other styles
		switch ppTag.Style {
		case "simple":
			simpleParams := getSimplePathParams(ctx, ppTag.ParamName, fieldType.Type, valType, ppTag.Explode)
			for k, v := range simpleParams {
				parsedParameters[k] = v
			}
		}
	}

	// TODO should we handle the case where there are no matching path params?
	return ReplaceParameters(url, parsedParameters)
}

func getSimplePathParams(ctx context.Context, parentName string, objType reflect.Type, objValue reflect.Value, explode bool) map[string]string {
	pathParams := make(map[string]string)

	if objType.Kind() == reflect.Ptr {
		if objValue.IsNil() {
			return nil
		}
		objType = objType.Elem()
		objValue = objValue.Elem()
	}

	switch objType.Kind() {
	case reflect.Array, reflect.Slice:
		if objValue.Len() == 0 {
			return nil
		}
		var ppVals []string
		for i := 0; i < objValue.Len(); i++ {
			ppVals = append(ppVals, fmt.Sprintf("%v", objValue.Index(i).Interface()))
		}
		pathParams[parentName] = strings.Join(ppVals, ",")
	case reflect.Map:
		if objValue.Len() == 0 {
			return nil
		}
		var ppVals []string
		objMap := objValue.MapRange()
		for objMap.Next() {
			if explode {
				ppVals = append(ppVals, fmt.Sprintf("%s=%v", objMap.Key().String(), objMap.Value().Interface()))
			} else {
				ppVals = append(ppVals, fmt.Sprintf("%s,%v", objMap.Key().String(), objMap.Value().Interface()))
			}
		}
		pathParams[parentName] = strings.Join(ppVals, ",")
	case reflect.Struct:
		var ppVals []string
		for i := 0; i < objType.NumField(); i++ {
			fieldType := objType.Field(i)
			valType := objValue.Field(i)

			ppTag := parseParamTag(pathParamTagKey, fieldType, "simple", explode)
			if ppTag == nil {
				continue
			}

			if fieldType.Type.Kind() == reflect.Pointer {
				if valType.IsNil() {
					continue
				}
				valType = valType.Elem()
			}

			if explode {
				ppVals = append(ppVals, fmt.Sprintf("%s=%v", ppTag.ParamName, valType.Interface()))
			} else {
				ppVals = append(ppVals, fmt.Sprintf("%s,%v", ppTag.ParamName, valType.Interface()))
			}
		}
		pathParams[parentName] = strings.Join(ppVals, ",")
	default:
		pathParams[parentName] = fmt.Sprintf("%v", objValue.Interface())
	}

	return pathParams
}
