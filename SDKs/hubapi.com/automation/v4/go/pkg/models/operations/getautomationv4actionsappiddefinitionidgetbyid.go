package operations

import (
"openapi/pkg/models/shared")

type GetAutomationV4ActionsAppIDDefinitionIDGetByIDPathParams struct {
    AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
    DefinitionID string `pathParam:"style=simple,explode=false,name=definitionId"`
    
}

type GetAutomationV4ActionsAppIDDefinitionIDGetByIDQueryParams struct {
    Archived *bool `queryParam:"style=form,explode=true,name=archived"`
    
}

type GetAutomationV4ActionsAppIDDefinitionIDGetByIDSecurity struct {
    DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetAutomationV4ActionsAppIDDefinitionIDGetByIDRequest struct {
    PathParams GetAutomationV4ActionsAppIDDefinitionIDGetByIDPathParams 
    QueryParams GetAutomationV4ActionsAppIDDefinitionIDGetByIDQueryParams 
    Security GetAutomationV4ActionsAppIDDefinitionIDGetByIDSecurity 
    
}

type GetAutomationV4ActionsAppIDDefinitionIDGetByIDResponse struct {
    Body []byte 
    ContentType string 
    ExtensionActionDefinition *shared.ExtensionActionDefinition 
    StatusCode int64 
    
}

