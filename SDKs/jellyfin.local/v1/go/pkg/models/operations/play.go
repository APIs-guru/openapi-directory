package operations

import (
"openapi/pkg/models/shared")

type PlayPathParams struct {
    SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
    
}

type PlayQueryParams struct {
    ItemIds []string `queryParam:"style=form,explode=true,name=itemIds"`
    PlayCommand shared.PlayCommandEnum `queryParam:"style=form,explode=true,name=playCommand"`
    StartPositionTicks *int64 `queryParam:"style=form,explode=true,name=startPositionTicks"`
    
}

type PlaySecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type PlayRequest struct {
    PathParams PlayPathParams 
    QueryParams PlayQueryParams 
    Security PlaySecurity 
    
}

type PlayResponse struct {
    ContentType string 
    StatusCode int64 
    
}

