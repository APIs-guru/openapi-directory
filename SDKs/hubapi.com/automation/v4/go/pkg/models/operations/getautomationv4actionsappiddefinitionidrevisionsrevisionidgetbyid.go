package operations

import (
"openapi/pkg/models/shared")

type GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDPathParams struct {
    AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
    DefinitionID string `pathParam:"style=simple,explode=false,name=definitionId"`
    RevisionID string `pathParam:"style=simple,explode=false,name=revisionId"`
    
}

type GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDSecurity struct {
    DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDRequest struct {
    PathParams GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDPathParams 
    Security GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDSecurity 
    
}

type GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDResponse struct {
    ActionRevision *shared.ActionRevision 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

