package operations

import (
"openapi/pkg/models/shared")


type GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDFunctionTypeEnum string

const (
    GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDFunctionTypeEnumPreActionExecution GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDFunctionTypeEnum = "PRE_ACTION_EXECUTION"
GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDFunctionTypeEnumPreFetchOptions GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDFunctionTypeEnum = "PRE_FETCH_OPTIONS"
GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDFunctionTypeEnumPostFetchOptions GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDFunctionTypeEnum = "POST_FETCH_OPTIONS"
)


type GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDPathParams struct {
    AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
    DefinitionID string `pathParam:"style=simple,explode=false,name=definitionId"`
    FunctionID string `pathParam:"style=simple,explode=false,name=functionId"`
    FunctionType GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDFunctionTypeEnum `pathParam:"style=simple,explode=false,name=functionType"`
    
}

type GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDSecurity struct {
    DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDRequest struct {
    PathParams GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDPathParams 
    Security GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDSecurity 
    
}

type GetAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDGetByIDResponse struct {
    ActionFunction *shared.ActionFunction 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

