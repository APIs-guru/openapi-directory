package operations

import (
"openapi/pkg/models/shared")

type GetSubtitlePlaylistPathParams struct {
    Index int32 `pathParam:"style=simple,explode=false,name=index"`
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    MediaSourceID string `pathParam:"style=simple,explode=false,name=mediaSourceId"`
    
}

type GetSubtitlePlaylistQueryParams struct {
    SegmentLength int32 `queryParam:"style=form,explode=true,name=segmentLength"`
    
}

type GetSubtitlePlaylistSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetSubtitlePlaylistRequest struct {
    PathParams GetSubtitlePlaylistPathParams 
    QueryParams GetSubtitlePlaylistQueryParams 
    Security GetSubtitlePlaylistSecurity 
    
}

type GetSubtitlePlaylistResponse struct {
    ContentType string 
    GetSubtitlePlaylist200ApplicationXMpegurlBinaryString []byte 
    StatusCode int64 
    
}

