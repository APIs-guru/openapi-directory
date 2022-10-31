package operations

import (
"openapi/pkg/models/shared")


type GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnum string

const (
    GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnumPreActionExecution GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnum = "PRE_ACTION_EXECUTION"
GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnumPreFetchOptions GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnum = "PRE_FETCH_OPTIONS"
GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnumPostFetchOptions GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnum = "POST_FETCH_OPTIONS"
)


type GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypePathParams struct {
    AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
    DefinitionID string `pathParam:"style=simple,explode=false,name=definitionId"`
    FunctionType GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnum `pathParam:"style=simple,explode=false,name=functionType"`
    
}

type GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeSecurity struct {
    DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeRequest struct {
    PathParams GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypePathParams 
    Security GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeSecurity 
    
}

type GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeGetByFunctionTypeResponse struct {
    ActionFunction *shared.ActionFunction 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

