package operations

import (
"openapi/pkg/models/shared")

type GetTimerPathParams struct {
    TimerID string `pathParam:"style=simple,explode=false,name=timerId"`
    
}

type GetTimerSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTimerRequest struct {
    PathParams GetTimerPathParams 
    Security GetTimerSecurity 
    
}

type GetTimerResponse struct {
    ContentType string 
    StatusCode int64 
    TimerInfoDto *shared.TimerInfoDto 
    
}

