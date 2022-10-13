package operations

import (
	"openapi/pkg/models/shared"
)

type GetMusicVideoRemoteSearchResultsRequests struct {
	MusicVideoInfoRemoteSearchQuery  *shared.MusicVideoInfoRemoteSearchQuery `request:"mediaType=application/*+json"`
	MusicVideoInfoRemoteSearchQuery1 *shared.MusicVideoInfoRemoteSearchQuery `request:"mediaType=application/json"`
	MusicVideoInfoRemoteSearchQuery2 *shared.MusicVideoInfoRemoteSearchQuery `request:"mediaType=text/json"`
}

type GetMusicVideoRemoteSearchResultsSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetMusicVideoRemoteSearchResultsRequest struct {
	Request  GetMusicVideoRemoteSearchResultsRequests
	Security GetMusicVideoRemoteSearchResultsSecurity
}

type GetMusicVideoRemoteSearchResultsResponse struct {
	ContentType         string
	RemoteSearchResults []shared.RemoteSearchResult
	StatusCode          int64
}
