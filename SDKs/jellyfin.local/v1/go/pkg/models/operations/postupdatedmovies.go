package operations

import (
	"openapi/pkg/models/shared"
)

type PostUpdatedMoviesQueryParams struct {
	ImdbID *string `queryParam:"style=form,explode=true,name=imdbId"`
	TmdbID *string `queryParam:"style=form,explode=true,name=tmdbId"`
}

type PostUpdatedMoviesSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type PostUpdatedMoviesRequest struct {
	QueryParams PostUpdatedMoviesQueryParams
	Security    PostUpdatedMoviesSecurity
}

type PostUpdatedMoviesResponse struct {
	ContentType string
	StatusCode  int64
}
