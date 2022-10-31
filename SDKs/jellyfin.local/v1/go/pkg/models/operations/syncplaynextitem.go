package operations

import (
"openapi/pkg/models/shared")

type SyncPlayNextItemRequests struct {
    NextItemRequestDto *shared.NextItemRequestDto `request:"mediaType=application/*+json"`
    NextItemRequestDto1 *shared.NextItemRequestDto `request:"mediaType=application/json"`
    NextItemRequestDto2 *shared.NextItemRequestDto `request:"mediaType=text/json"`
    
}

type SyncPlayNextItemSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type SyncPlayNextItemRequest struct {
    Request SyncPlayNextItemRequests 
    Security SyncPlayNextItemSecurity 
    
}

type SyncPlayNextItemResponse struct {
    ContentType string 
    StatusCode int64 
    
}

