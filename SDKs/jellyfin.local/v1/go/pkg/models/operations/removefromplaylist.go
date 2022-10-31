package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveFromPlaylistPathParams struct {
	PlaylistID string `pathParam:"style=simple,explode=false,name=playlistId"`
}

type RemoveFromPlaylistQueryParams struct {
	EntryIds []string `queryParam:"style=form,explode=true,name=entryIds"`
}

type RemoveFromPlaylistSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type RemoveFromPlaylistRequest struct {
	PathParams  RemoveFromPlaylistPathParams
	QueryParams RemoveFromPlaylistQueryParams
	Security    RemoveFromPlaylistSecurity
}

type RemoveFromPlaylistResponse struct {
	ContentType string
	StatusCode  int64
}
