package operations

import (
"openapi/pkg/models/shared")

type PatchAutomationV4ActionsAppIDDefinitionIDUpdatePathParams struct {
    AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
    DefinitionID string `pathParam:"style=simple,explode=false,name=definitionId"`
    
}

type PatchAutomationV4ActionsAppIDDefinitionIDUpdateSecurity struct {
    DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type PatchAutomationV4ActionsAppIDDefinitionIDUpdateRequest struct {
    PathParams PatchAutomationV4ActionsAppIDDefinitionIDUpdatePathParams 
    Request shared.ExtensionActionDefinitionPatch `request:"mediaType=application/json"`
    Security PatchAutomationV4ActionsAppIDDefinitionIDUpdateSecurity 
    
}

type PatchAutomationV4ActionsAppIDDefinitionIDUpdateResponse struct {
    Body []byte 
    ContentType string 
    ExtensionActionDefinition *shared.ExtensionActionDefinition 
    StatusCode int64 
    
}

