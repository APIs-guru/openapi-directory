package operations

import (
"openapi/pkg/models/shared")

type GetPlaylistByIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}


type GetPlaylistByIDSortEnum string

const (
    GetPlaylistByIDSortEnumRecentAddedFirst GetPlaylistByIDSortEnum = "recent_added_first"
GetPlaylistByIDSortEnumOldestAddedFirst GetPlaylistByIDSortEnum = "oldest_added_first"
GetPlaylistByIDSortEnumRecentPublishedFirst GetPlaylistByIDSortEnum = "recent_published_first"
GetPlaylistByIDSortEnumOldestPublishedFirst GetPlaylistByIDSortEnum = "oldest_published_first"
)



type GetPlaylistByIDTypeEnum string

const (
    GetPlaylistByIDTypeEnumEpisodeList GetPlaylistByIDTypeEnum = "episode_list"
GetPlaylistByIDTypeEnumPodcastList GetPlaylistByIDTypeEnum = "podcast_list"
)


type GetPlaylistByIDQueryParams struct {
    LastTimestampMs *int64 `queryParam:"style=form,explode=true,name=last_timestamp_ms"`
    Sort *GetPlaylistByIDSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Type *GetPlaylistByIDTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type GetPlaylistByIDHeaders struct {
    XListenAPIKey string `header:"style=simple,explode=false,name=X-ListenAPI-Key"`
    
}

type GetPlaylistByIDRequest struct {
    PathParams GetPlaylistByIDPathParams 
    QueryParams GetPlaylistByIDQueryParams 
    Headers GetPlaylistByIDHeaders 
    
}

type GetPlaylistByIDResponse struct {
    ContentType string 
    Headers map[string][]string 
    PlaylistResponse *shared.PlaylistResponse 
    StatusCode int64 
    
}

