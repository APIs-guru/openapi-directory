package operations

import (
"openapi/pkg/models/shared")

type GetHlsPlaylistLegacyPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    PlaylistID string `pathParam:"style=simple,explode=false,name=playlistId"`
    
}

type GetHlsPlaylistLegacySecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetHlsPlaylistLegacyRequest struct {
    PathParams GetHlsPlaylistLegacyPathParams 
    Security GetHlsPlaylistLegacySecurity 
    
}

type GetHlsPlaylistLegacyResponse struct {
    ContentType string 
    GetHlsPlaylistLegacy200ApplicationXMpegurlBinaryString []byte 
    StatusCode int64 
    
}

