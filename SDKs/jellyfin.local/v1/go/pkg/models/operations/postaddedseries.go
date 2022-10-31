package operations

import (
"openapi/pkg/models/shared")

type PostAddedSeriesQueryParams struct {
    TvdbID *string `queryParam:"style=form,explode=true,name=tvdbId"`
    
}

type PostAddedSeriesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostAddedSeriesRequest struct {
    QueryParams PostAddedSeriesQueryParams 
    Security PostAddedSeriesSecurity 
    
}

type PostAddedSeriesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

