package operations

import (
"openapi/pkg/models/shared")

type OpenLiveStreamQueryParams struct {
    AudioStreamIndex *int32 `queryParam:"style=form,explode=true,name=audioStreamIndex"`
    EnableDirectPlay *bool `queryParam:"style=form,explode=true,name=enableDirectPlay"`
    EnableDirectStream *bool `queryParam:"style=form,explode=true,name=enableDirectStream"`
    ItemID *string `queryParam:"style=form,explode=true,name=itemId"`
    MaxAudioChannels *int32 `queryParam:"style=form,explode=true,name=maxAudioChannels"`
    MaxStreamingBitrate *int32 `queryParam:"style=form,explode=true,name=maxStreamingBitrate"`
    OpenToken *string `queryParam:"style=form,explode=true,name=openToken"`
    PlaySessionID *string `queryParam:"style=form,explode=true,name=playSessionId"`
    StartTimeTicks *int64 `queryParam:"style=form,explode=true,name=startTimeTicks"`
    SubtitleStreamIndex *int32 `queryParam:"style=form,explode=true,name=subtitleStreamIndex"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type OpenLiveStreamRequests struct {
    OpenLiveStreamDto *shared.OpenLiveStreamDto `request:"mediaType=application/*+json"`
    OpenLiveStreamDto1 *shared.OpenLiveStreamDto `request:"mediaType=application/json"`
    OpenLiveStreamDto2 *shared.OpenLiveStreamDto `request:"mediaType=text/json"`
    
}

type OpenLiveStreamSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type OpenLiveStreamRequest struct {
    QueryParams OpenLiveStreamQueryParams 
    Request *OpenLiveStreamRequests 
    Security OpenLiveStreamSecurity 
    
}

type OpenLiveStreamResponse struct {
    ContentType string 
    LiveStreamResponse *shared.LiveStreamResponse 
    StatusCode int64 
    
}

