package operations

import (
	"openapi/pkg/models/shared"
)

type AddToPlaylistPathParams struct {
	PlaylistID string `pathParam:"style=simple,explode=false,name=playlistId"`
}

type AddToPlaylistQueryParams struct {
	Ids    []string `queryParam:"style=form,explode=true,name=ids"`
	UserID *string  `queryParam:"style=form,explode=true,name=userId"`
}

type AddToPlaylistSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type AddToPlaylistRequest struct {
	PathParams  AddToPlaylistPathParams
	QueryParams AddToPlaylistQueryParams
	Security    AddToPlaylistSecurity
}

type AddToPlaylistResponse struct {
	ContentType string
	StatusCode  int64
}
