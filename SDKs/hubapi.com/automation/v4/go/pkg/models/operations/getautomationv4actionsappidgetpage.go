package operations

import (
"openapi/pkg/models/shared")

type GetAutomationV4ActionsAppIDGetPagePathParams struct {
    AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
    
}

type GetAutomationV4ActionsAppIDGetPageQueryParams struct {
    After *string `queryParam:"style=form,explode=true,name=after"`
    Archived *bool `queryParam:"style=form,explode=true,name=archived"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    
}

type GetAutomationV4ActionsAppIDGetPageSecurity struct {
    DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetAutomationV4ActionsAppIDGetPageRequest struct {
    PathParams GetAutomationV4ActionsAppIDGetPagePathParams 
    QueryParams GetAutomationV4ActionsAppIDGetPageQueryParams 
    Security GetAutomationV4ActionsAppIDGetPageSecurity 
    
}

type GetAutomationV4ActionsAppIDGetPageResponse struct {
    Body []byte 
    CollectionResponseExtensionActionDefinitionForwardPaging *shared.CollectionResponseExtensionActionDefinitionForwardPaging 
    ContentType string 
    StatusCode int64 
    
}

