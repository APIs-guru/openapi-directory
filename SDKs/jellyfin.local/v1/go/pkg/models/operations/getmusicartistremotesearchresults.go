package operations

import (
	"openapi/pkg/models/shared"
)

type GetMusicArtistRemoteSearchResultsRequests struct {
	ArtistInfoRemoteSearchQuery  *shared.ArtistInfoRemoteSearchQuery `request:"mediaType=application/*+json"`
	ArtistInfoRemoteSearchQuery1 *shared.ArtistInfoRemoteSearchQuery `request:"mediaType=application/json"`
	ArtistInfoRemoteSearchQuery2 *shared.ArtistInfoRemoteSearchQuery `request:"mediaType=text/json"`
}

type GetMusicArtistRemoteSearchResultsSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetMusicArtistRemoteSearchResultsRequest struct {
	Request  GetMusicArtistRemoteSearchResultsRequests
	Security GetMusicArtistRemoteSearchResultsSecurity
}

type GetMusicArtistRemoteSearchResultsResponse struct {
	ContentType         string
	RemoteSearchResults []shared.RemoteSearchResult
	StatusCode          int64
}
