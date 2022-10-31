package operations

import (
"openapi/pkg/models/shared")

type GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPagePathParams struct {
    AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
    DefinitionID string `pathParam:"style=simple,explode=false,name=definitionId"`
    
}

type GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageQueryParams struct {
    After *string `queryParam:"style=form,explode=true,name=after"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    
}

type GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageSecurity struct {
    DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageRequest struct {
    PathParams GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPagePathParams 
    QueryParams GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageQueryParams 
    Security GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageSecurity 
    
}

type GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageResponse struct {
    Body []byte 
    CollectionResponseActionRevisionForwardPaging *shared.CollectionResponseActionRevisionForwardPaging 
    ContentType string 
    StatusCode int64 
    
}

