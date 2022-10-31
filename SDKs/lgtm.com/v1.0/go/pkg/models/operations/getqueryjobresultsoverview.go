package operations

import (
"openapi/pkg/models/shared")

type GetQueryJobResultsOverviewPathParams struct {
    QueryjobID string `pathParam:"style=simple,explode=false,name=queryjob-id"`
    
}

type GetQueryJobResultsOverviewQueryParams struct {
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Start *string `queryParam:"style=form,explode=true,name=start"`
    
}

type GetQueryJobResultsOverviewSecurity struct {
    AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetQueryJobResultsOverviewRequest struct {
    PathParams GetQueryJobResultsOverviewPathParams 
    QueryParams GetQueryJobResultsOverviewQueryParams 
    Security GetQueryJobResultsOverviewSecurity 
    
}

type GetQueryJobResultsOverviewResponse struct {
    ContentType string 
    StatusCode int64 
    QueryjobResultsOverview *shared.QueryjobResultsOverview 
    
}

