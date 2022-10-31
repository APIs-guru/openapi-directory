package operations

import (
"openapi/pkg/models/shared")

type DeleteAutomationV4ActionsAppIDDefinitionIDArchivePathParams struct {
    AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
    DefinitionID string `pathParam:"style=simple,explode=false,name=definitionId"`
    
}

type DeleteAutomationV4ActionsAppIDDefinitionIDArchiveSecurity struct {
    DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type DeleteAutomationV4ActionsAppIDDefinitionIDArchiveRequest struct {
    PathParams DeleteAutomationV4ActionsAppIDDefinitionIDArchivePathParams 
    Security DeleteAutomationV4ActionsAppIDDefinitionIDArchiveSecurity 
    
}

type DeleteAutomationV4ActionsAppIDDefinitionIDArchiveResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

