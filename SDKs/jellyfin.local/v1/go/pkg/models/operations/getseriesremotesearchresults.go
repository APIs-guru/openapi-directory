package operations

import (
"openapi/pkg/models/shared")

type GetSeriesRemoteSearchResultsRequests struct {
    SeriesInfoRemoteSearchQuery *shared.SeriesInfoRemoteSearchQuery `request:"mediaType=application/*+json"`
    SeriesInfoRemoteSearchQuery1 *shared.SeriesInfoRemoteSearchQuery `request:"mediaType=application/json"`
    SeriesInfoRemoteSearchQuery2 *shared.SeriesInfoRemoteSearchQuery `request:"mediaType=text/json"`
    
}

type GetSeriesRemoteSearchResultsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetSeriesRemoteSearchResultsRequest struct {
    Request GetSeriesRemoteSearchResultsRequests 
    Security GetSeriesRemoteSearchResultsSecurity 
    
}

type GetSeriesRemoteSearchResultsResponse struct {
    ContentType string 
    RemoteSearchResults []shared.RemoteSearchResult 
    StatusCode int64 
    
}

