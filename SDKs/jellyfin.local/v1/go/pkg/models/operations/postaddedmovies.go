package operations

import (
	"openapi/pkg/models/shared"
)

type PostAddedMoviesQueryParams struct {
	ImdbID *string `queryParam:"style=form,explode=true,name=imdbId"`
	TmdbID *string `queryParam:"style=form,explode=true,name=tmdbId"`
}

type PostAddedMoviesSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type PostAddedMoviesRequest struct {
	QueryParams PostAddedMoviesQueryParams
	Security    PostAddedMoviesSecurity
}

type PostAddedMoviesResponse struct {
	ContentType string
	StatusCode  int64
}
