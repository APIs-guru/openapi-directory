package operations

import (
"openapi/pkg/models/shared")

type GetMusicAlbumRemoteSearchResultsRequests struct {
    AlbumInfoRemoteSearchQuery *shared.AlbumInfoRemoteSearchQuery `request:"mediaType=application/*+json"`
    AlbumInfoRemoteSearchQuery1 *shared.AlbumInfoRemoteSearchQuery `request:"mediaType=application/json"`
    AlbumInfoRemoteSearchQuery2 *shared.AlbumInfoRemoteSearchQuery `request:"mediaType=text/json"`
    
}

type GetMusicAlbumRemoteSearchResultsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetMusicAlbumRemoteSearchResultsRequest struct {
    Request GetMusicAlbumRemoteSearchResultsRequests 
    Security GetMusicAlbumRemoteSearchResultsSecurity 
    
}

type GetMusicAlbumRemoteSearchResultsResponse struct {
    ContentType string 
    RemoteSearchResults []shared.RemoteSearchResult 
    StatusCode int64 
    
}

