package operations

import (
	"openapi/pkg/models/shared"
)

type GetPersonRemoteSearchResultsRequests struct {
	PersonLookupInfoRemoteSearchQuery  *shared.PersonLookupInfoRemoteSearchQuery `request:"mediaType=application/*+json"`
	PersonLookupInfoRemoteSearchQuery1 *shared.PersonLookupInfoRemoteSearchQuery `request:"mediaType=application/json"`
	PersonLookupInfoRemoteSearchQuery2 *shared.PersonLookupInfoRemoteSearchQuery `request:"mediaType=text/json"`
}

type GetPersonRemoteSearchResultsSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetPersonRemoteSearchResultsRequest struct {
	Request  GetPersonRemoteSearchResultsRequests
	Security GetPersonRemoteSearchResultsSecurity
}

type GetPersonRemoteSearchResultsResponse struct {
	ContentType         string
	RemoteSearchResults []shared.RemoteSearchResult
	StatusCode          int64
}
