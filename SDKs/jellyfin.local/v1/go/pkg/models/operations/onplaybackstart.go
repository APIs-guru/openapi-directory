package operations

import (
"openapi/pkg/models/shared")

type OnPlaybackStartPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type OnPlaybackStartQueryParams struct {
    AudioStreamIndex *int32 `queryParam:"style=form,explode=true,name=audioStreamIndex"`
    CanSeek *bool `queryParam:"style=form,explode=true,name=canSeek"`
    LiveStreamID *string `queryParam:"style=form,explode=true,name=liveStreamId"`
    MediaSourceID *string `queryParam:"style=form,explode=true,name=mediaSourceId"`
    PlayMethod *shared.PlayMethodEnum `queryParam:"style=form,explode=true,name=playMethod"`
    PlaySessionID *string `queryParam:"style=form,explode=true,name=playSessionId"`
    SubtitleStreamIndex *int32 `queryParam:"style=form,explode=true,name=subtitleStreamIndex"`
    
}

type OnPlaybackStartSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type OnPlaybackStartRequest struct {
    PathParams OnPlaybackStartPathParams 
    QueryParams OnPlaybackStartQueryParams 
    Security OnPlaybackStartSecurity 
    
}

type OnPlaybackStartResponse struct {
    ContentType string 
    StatusCode int64 
    
}

