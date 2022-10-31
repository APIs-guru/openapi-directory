package operations

import (
"openapi/pkg/models/shared")

type DisplayContentPathParams struct {
    SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
    
}

type DisplayContentQueryParams struct {
    ItemID string `queryParam:"style=form,explode=true,name=itemId"`
    ItemName string `queryParam:"style=form,explode=true,name=itemName"`
    ItemType string `queryParam:"style=form,explode=true,name=itemType"`
    
}

type DisplayContentSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type DisplayContentRequest struct {
    PathParams DisplayContentPathParams 
    QueryParams DisplayContentQueryParams 
    Security DisplayContentSecurity 
    
}

type DisplayContentResponse struct {
    ContentType string 
    StatusCode int64 
    
}

