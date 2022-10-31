package operations

import (
"openapi/pkg/models/shared")

type GetPlaylistItemsPathParams struct {
    PlaylistID string `pathParam:"style=simple,explode=false,name=playlistId"`
    
}

type GetPlaylistItemsQueryParams struct {
    EnableImageTypes []shared.ImageTypeEnum `queryParam:"style=form,explode=true,name=enableImageTypes"`
    EnableImages *bool `queryParam:"style=form,explode=true,name=enableImages"`
    EnableUserData *bool `queryParam:"style=form,explode=true,name=enableUserData"`
    Fields []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    ImageTypeLimit *int32 `queryParam:"style=form,explode=true,name=imageTypeLimit"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    StartIndex *int32 `queryParam:"style=form,explode=true,name=startIndex"`
    UserID string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetPlaylistItemsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetPlaylistItemsRequest struct {
    PathParams GetPlaylistItemsPathParams 
    QueryParams GetPlaylistItemsQueryParams 
    Security GetPlaylistItemsSecurity 
    
}

type GetPlaylistItemsResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

