package operations

import (
"openapi/pkg/models/shared")

type GetTrailerRemoteSearchResultsRequests struct {
    TrailerInfoRemoteSearchQuery *shared.TrailerInfoRemoteSearchQuery `request:"mediaType=application/*+json"`
    TrailerInfoRemoteSearchQuery1 *shared.TrailerInfoRemoteSearchQuery `request:"mediaType=application/json"`
    TrailerInfoRemoteSearchQuery2 *shared.TrailerInfoRemoteSearchQuery `request:"mediaType=text/json"`
    
}

type GetTrailerRemoteSearchResultsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTrailerRemoteSearchResultsRequest struct {
    Request GetTrailerRemoteSearchResultsRequests 
    Security GetTrailerRemoteSearchResultsSecurity 
    
}

type GetTrailerRemoteSearchResultsResponse struct {
    ContentType string 
    RemoteSearchResults []shared.RemoteSearchResult 
    StatusCode int64 
    
}

