package operations

import (
"openapi/pkg/models/shared")

type SyncPlayPingRequests struct {
    PingRequestDto *shared.PingRequestDto `request:"mediaType=application/*+json"`
    PingRequestDto1 *shared.PingRequestDto `request:"mediaType=application/json"`
    PingRequestDto2 *shared.PingRequestDto `request:"mediaType=text/json"`
    
}

type SyncPlayPingSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type SyncPlayPingRequest struct {
    Request SyncPlayPingRequests 
    Security SyncPlayPingSecurity 
    
}

type SyncPlayPingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

