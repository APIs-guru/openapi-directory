package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnum string

const (
	DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnumPreActionExecution DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnum = "PRE_ACTION_EXECUTION"
	DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnumPreFetchOptions    DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnum = "PRE_FETCH_OPTIONS"
	DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnumPostFetchOptions   DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnum = "POST_FETCH_OPTIONS"
)

type DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypePathParams struct {
	AppID        int32                                                                                                `pathParam:"style=simple,explode=false,name=appId"`
	DefinitionID string                                                                                               `pathParam:"style=simple,explode=false,name=definitionId"`
	FunctionType DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnum `pathParam:"style=simple,explode=false,name=functionType"`
}

type DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeSecurity struct {
	DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeRequest struct {
	PathParams DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypePathParams
	Security   DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeSecurity
}

type DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeArchiveByFunctionTypeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
