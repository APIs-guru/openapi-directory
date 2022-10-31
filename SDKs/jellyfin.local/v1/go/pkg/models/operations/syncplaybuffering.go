package operations

import (
"openapi/pkg/models/shared")

type SyncPlayBufferingRequests struct {
    BufferRequestDto *shared.BufferRequestDto `request:"mediaType=application/*+json"`
    BufferRequestDto1 *shared.BufferRequestDto `request:"mediaType=application/json"`
    BufferRequestDto2 *shared.BufferRequestDto `request:"mediaType=text/json"`
    
}

type SyncPlayBufferingSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type SyncPlayBufferingRequest struct {
    Request SyncPlayBufferingRequests 
    Security SyncPlayBufferingSecurity 
    
}

type SyncPlayBufferingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

