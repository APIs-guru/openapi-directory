package operations

import (
"openapi/pkg/models/shared")

type GetPlaybackInfoPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type GetPlaybackInfoQueryParams struct {
    UserID string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetPlaybackInfoSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetPlaybackInfoRequest struct {
    PathParams GetPlaybackInfoPathParams 
    QueryParams GetPlaybackInfoQueryParams 
    Security GetPlaybackInfoSecurity 
    
}

type GetPlaybackInfoResponse struct {
    ContentType string 
    PlaybackInfoResponse *shared.PlaybackInfoResponse 
    StatusCode int64 
    
}

