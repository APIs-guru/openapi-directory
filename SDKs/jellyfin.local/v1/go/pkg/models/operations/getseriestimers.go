package operations

import (
"openapi/pkg/models/shared")

type GetSeriesTimersQueryParams struct {
    SortBy *string `queryParam:"style=form,explode=true,name=sortBy"`
    SortOrder *shared.SortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    
}

type GetSeriesTimersSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetSeriesTimersRequest struct {
    QueryParams GetSeriesTimersQueryParams 
    Security GetSeriesTimersSecurity 
    
}

type GetSeriesTimersResponse struct {
    ContentType string 
    SeriesTimerInfoDtoQueryResult *shared.SeriesTimerInfoDtoQueryResult 
    StatusCode int64 
    
}

