package operations

import (
"openapi/pkg/models/shared")

type SyncPlayPreviousItemRequests struct {
    PreviousItemRequestDto *shared.PreviousItemRequestDto `request:"mediaType=application/*+json"`
    PreviousItemRequestDto1 *shared.PreviousItemRequestDto `request:"mediaType=application/json"`
    PreviousItemRequestDto2 *shared.PreviousItemRequestDto `request:"mediaType=text/json"`
    
}

type SyncPlayPreviousItemSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type SyncPlayPreviousItemRequest struct {
    Request SyncPlayPreviousItemRequests 
    Security SyncPlayPreviousItemSecurity 
    
}

type SyncPlayPreviousItemResponse struct {
    ContentType string 
    StatusCode int64 
    
}

