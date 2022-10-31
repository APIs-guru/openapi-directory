package operations

import (
"openapi/pkg/models/shared")

type GetBoxSetRemoteSearchResultsRequests struct {
    BoxSetInfoRemoteSearchQuery *shared.BoxSetInfoRemoteSearchQuery `request:"mediaType=application/*+json"`
    BoxSetInfoRemoteSearchQuery1 *shared.BoxSetInfoRemoteSearchQuery `request:"mediaType=application/json"`
    BoxSetInfoRemoteSearchQuery2 *shared.BoxSetInfoRemoteSearchQuery `request:"mediaType=text/json"`
    
}

type GetBoxSetRemoteSearchResultsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetBoxSetRemoteSearchResultsRequest struct {
    Request GetBoxSetRemoteSearchResultsRequests 
    Security GetBoxSetRemoteSearchResultsSecurity 
    
}

type GetBoxSetRemoteSearchResultsResponse struct {
    ContentType string 
    RemoteSearchResults []shared.RemoteSearchResult 
    StatusCode int64 
    
}

