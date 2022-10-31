package operations

import (
"openapi/pkg/models/shared")

type CloseLiveStreamQueryParams struct {
    LiveStreamID string `queryParam:"style=form,explode=true,name=liveStreamId"`
    
}

type CloseLiveStreamSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type CloseLiveStreamRequest struct {
    QueryParams CloseLiveStreamQueryParams 
    Security CloseLiveStreamSecurity 
    
}

type CloseLiveStreamResponse struct {
    ContentType string 
    StatusCode int64 
    
}

