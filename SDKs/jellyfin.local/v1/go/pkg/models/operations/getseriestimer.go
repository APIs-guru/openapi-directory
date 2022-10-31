package operations

import (
"openapi/pkg/models/shared")

type GetSeriesTimerPathParams struct {
    TimerID string `pathParam:"style=simple,explode=false,name=timerId"`
    
}

type GetSeriesTimerSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetSeriesTimerRequest struct {
    PathParams GetSeriesTimerPathParams 
    Security GetSeriesTimerSecurity 
    
}

type GetSeriesTimerResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    SeriesTimerInfoDto *shared.SeriesTimerInfoDto 
    StatusCode int64 
    
}

