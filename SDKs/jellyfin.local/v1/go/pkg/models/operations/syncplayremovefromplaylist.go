package operations

import (
"openapi/pkg/models/shared")

type SyncPlayRemoveFromPlaylistRequests struct {
    RemoveFromPlaylistRequestDto *shared.RemoveFromPlaylistRequestDto `request:"mediaType=application/*+json"`
    RemoveFromPlaylistRequestDto1 *shared.RemoveFromPlaylistRequestDto `request:"mediaType=application/json"`
    RemoveFromPlaylistRequestDto2 *shared.RemoveFromPlaylistRequestDto `request:"mediaType=text/json"`
    
}

type SyncPlayRemoveFromPlaylistSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type SyncPlayRemoveFromPlaylistRequest struct {
    Request SyncPlayRemoveFromPlaylistRequests 
    Security SyncPlayRemoveFromPlaylistSecurity 
    
}

type SyncPlayRemoveFromPlaylistResponse struct {
    ContentType string 
    StatusCode int64 
    
}

