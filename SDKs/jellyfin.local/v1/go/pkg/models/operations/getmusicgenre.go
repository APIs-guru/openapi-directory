package operations

import (
	"openapi/pkg/models/shared"
)

type GetMusicGenrePathParams struct {
	GenreName string `pathParam:"style=simple,explode=false,name=genreName"`
}

type GetMusicGenreQueryParams struct {
	UserID *string `queryParam:"style=form,explode=true,name=userId"`
}

type GetMusicGenreSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetMusicGenreRequest struct {
	PathParams  GetMusicGenrePathParams
	QueryParams GetMusicGenreQueryParams
	Security    GetMusicGenreSecurity
}

type GetMusicGenreResponse struct {
	BaseItemDto *shared.BaseItemDto
	ContentType string
	StatusCode  int64
}
