package operations

import (
	"openapi/pkg/models/shared"
)

type GetPlaylistsSortEnum string

const (
	GetPlaylistsSortEnumRecentAddedFirst GetPlaylistsSortEnum = "recent_added_first"
	GetPlaylistsSortEnumOldestAddedFirst GetPlaylistsSortEnum = "oldest_added_first"
	GetPlaylistsSortEnumNameAToZ         GetPlaylistsSortEnum = "name_a_to_z"
	GetPlaylistsSortEnumNameZToA         GetPlaylistsSortEnum = "name_z_to_a"
)

type GetPlaylistsQueryParams struct {
	Page *int64                `queryParam:"style=form,explode=true,name=page"`
	Sort *GetPlaylistsSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type GetPlaylistsHeaders struct {
	XListenAPIKey string `header:"style=simple,explode=false,name=X-ListenAPI-Key"`
}

type GetPlaylistsRequest struct {
	QueryParams GetPlaylistsQueryParams
	Headers     GetPlaylistsHeaders
}

type GetPlaylistsResponse struct {
	ContentType       string
	Headers           map[string][]string
	PlaylistsResponse *shared.PlaylistsResponse
	StatusCode        int64
}
