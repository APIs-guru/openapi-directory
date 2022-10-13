package operations

import (
	"openapi/pkg/models/shared"
)

type GetMovieRemoteSearchResultsRequests struct {
	MovieInfoRemoteSearchQuery  *shared.MovieInfoRemoteSearchQuery `request:"mediaType=application/*+json"`
	MovieInfoRemoteSearchQuery1 *shared.MovieInfoRemoteSearchQuery `request:"mediaType=application/json"`
	MovieInfoRemoteSearchQuery2 *shared.MovieInfoRemoteSearchQuery `request:"mediaType=text/json"`
}

type GetMovieRemoteSearchResultsSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetMovieRemoteSearchResultsRequest struct {
	Request  GetMovieRemoteSearchResultsRequests
	Security GetMovieRemoteSearchResultsSecurity
}

type GetMovieRemoteSearchResultsResponse struct {
	ContentType         string
	RemoteSearchResults []shared.RemoteSearchResult
	StatusCode          int64
}
