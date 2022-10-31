package operations

import (
"openapi/pkg/models/shared")


type DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveFunctionTypeEnum string

const (
    DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveFunctionTypeEnumPreActionExecution DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveFunctionTypeEnum = "PRE_ACTION_EXECUTION"
DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveFunctionTypeEnumPreFetchOptions DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveFunctionTypeEnum = "PRE_FETCH_OPTIONS"
DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveFunctionTypeEnumPostFetchOptions DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveFunctionTypeEnum = "POST_FETCH_OPTIONS"
)


type DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchivePathParams struct {
    AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
    DefinitionID string `pathParam:"style=simple,explode=false,name=definitionId"`
    FunctionID string `pathParam:"style=simple,explode=false,name=functionId"`
    FunctionType DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveFunctionTypeEnum `pathParam:"style=simple,explode=false,name=functionType"`
    
}

type DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveSecurity struct {
    DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveRequest struct {
    PathParams DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchivePathParams 
    Security DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveSecurity 
    
}

type DeleteAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeFunctionIDArchiveResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

