package operations

import (
"openapi/pkg/models/shared")

type SyncPlaySetNewQueueRequests struct {
    PlayRequestDto *shared.PlayRequestDto `request:"mediaType=application/*+json"`
    PlayRequestDto1 *shared.PlayRequestDto `request:"mediaType=application/json"`
    PlayRequestDto2 *shared.PlayRequestDto `request:"mediaType=text/json"`
    
}

type SyncPlaySetNewQueueSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type SyncPlaySetNewQueueRequest struct {
    Request SyncPlaySetNewQueueRequests 
    Security SyncPlaySetNewQueueSecurity 
    
}

type SyncPlaySetNewQueueResponse struct {
    ContentType string 
    StatusCode int64 
    
}

