package operations

import (
"openapi/pkg/models/shared")

type SyncPlayMovePlaylistItemRequests struct {
    MovePlaylistItemRequestDto *shared.MovePlaylistItemRequestDto `request:"mediaType=application/*+json"`
    MovePlaylistItemRequestDto1 *shared.MovePlaylistItemRequestDto `request:"mediaType=application/json"`
    MovePlaylistItemRequestDto2 *shared.MovePlaylistItemRequestDto `request:"mediaType=text/json"`
    
}

type SyncPlayMovePlaylistItemSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type SyncPlayMovePlaylistItemRequest struct {
    Request SyncPlayMovePlaylistItemRequests 
    Security SyncPlayMovePlaylistItemSecurity 
    
}

type SyncPlayMovePlaylistItemResponse struct {
    ContentType string 
    StatusCode int64 
    
}

