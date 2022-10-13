package operations

import (
	"openapi/pkg/models/shared"
)

type GetBookRemoteSearchResultsRequests struct {
	BookInfoRemoteSearchQuery  *shared.BookInfoRemoteSearchQuery `request:"mediaType=application/*+json"`
	BookInfoRemoteSearchQuery1 *shared.BookInfoRemoteSearchQuery `request:"mediaType=application/json"`
	BookInfoRemoteSearchQuery2 *shared.BookInfoRemoteSearchQuery `request:"mediaType=text/json"`
}

type GetBookRemoteSearchResultsSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetBookRemoteSearchResultsRequest struct {
	Request  GetBookRemoteSearchResultsRequests
	Security GetBookRemoteSearchResultsSecurity
}

type GetBookRemoteSearchResultsResponse struct {
	ContentType         string
	RemoteSearchResults []shared.RemoteSearchResult
	StatusCode          int64
}
