package operations

import (
	"openapi/pkg/models/shared"
)

type PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceFunctionTypeEnum string

const (
	PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceFunctionTypeEnumPreActionExecution PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceFunctionTypeEnum = "PRE_ACTION_EXECUTION"
	PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceFunctionTypeEnumPreFetchOptions    PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceFunctionTypeEnum = "PRE_FETCH_OPTIONS"
	PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceFunctionTypeEnumPostFetchOptions   PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceFunctionTypeEnum = "POST_FETCH_OPTIONS"
)

type PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplacePathParams struct {
	AppID        int32                                                                                                 `pathParam:"style=simple,explode=false,name=appId"`
	DefinitionID string                                                                                                `pathParam:"style=simple,explode=false,name=definitionId"`
	FunctionID   string                                                                                                `pathParam:"style=simple,explode=false,name=functionId"`
	FunctionType PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceFunctionTypeEnum `pathParam:"style=simple,explode=false,name=functionType"`
}

type PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceSecurity struct {
	DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceRequest struct {
	PathParams PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplacePathParams
	Request    []byte `request:"mediaType=text/plain"`
	Security   PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceSecurity
}

type PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDCreateOrReplaceResponse struct {
	ActionFunctionIdentifier *shared.ActionFunctionIdentifier
	Body                     []byte
	ContentType              string
	StatusCode               int64
}
