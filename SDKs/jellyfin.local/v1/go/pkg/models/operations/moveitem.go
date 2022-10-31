package operations

import (
"openapi/pkg/models/shared")

type MoveItemPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    NewIndex int32 `pathParam:"style=simple,explode=false,name=newIndex"`
    PlaylistID string `pathParam:"style=simple,explode=false,name=playlistId"`
    
}

type MoveItemSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type MoveItemRequest struct {
    PathParams MoveItemPathParams 
    Security MoveItemSecurity 
    
}

type MoveItemResponse struct {
    ContentType string 
    StatusCode int64 
    
}

