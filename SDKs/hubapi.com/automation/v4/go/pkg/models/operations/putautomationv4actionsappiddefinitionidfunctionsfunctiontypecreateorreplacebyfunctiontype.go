package operations

import (
"openapi/pkg/models/shared")


type PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum string

const (
    PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnumPreActionExecution PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum = "PRE_ACTION_EXECUTION"
PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnumPreFetchOptions PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum = "PRE_FETCH_OPTIONS"
PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnumPostFetchOptions PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum = "POST_FETCH_OPTIONS"
)


type PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypePathParams struct {
    AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
    DefinitionID string `pathParam:"style=simple,explode=false,name=definitionId"`
    FunctionType PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum `pathParam:"style=simple,explode=false,name=functionType"`
    
}

type PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeSecurity struct {
    DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest struct {
    PathParams PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypePathParams 
    Request string `request:"mediaType=text/plain"`
    Security PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeSecurity 
    
}

type PutAutomationV4ActionsAppIDDefinitionIDFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse struct {
    ActionFunctionIdentifier *shared.ActionFunctionIdentifier 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

