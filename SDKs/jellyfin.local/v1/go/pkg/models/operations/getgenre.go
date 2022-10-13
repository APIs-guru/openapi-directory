package operations

import (
	"openapi/pkg/models/shared"
)

type GetGenrePathParams struct {
	GenreName string `pathParam:"style=simple,explode=false,name=genreName"`
}

type GetGenreQueryParams struct {
	UserID *string `queryParam:"style=form,explode=true,name=userId"`
}

type GetGenreSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetGenreRequest struct {
	PathParams  GetGenrePathParams
	QueryParams GetGenreQueryParams
	Security    GetGenreSecurity
}

type GetGenreResponse struct {
	BaseItemDto *shared.BaseItemDto
	ContentType string
	StatusCode  int64
}
