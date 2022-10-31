package operations

import (
"openapi/pkg/models/shared")

type CancelTimerPathParams struct {
    TimerID string `pathParam:"style=simple,explode=false,name=timerId"`
    
}

type CancelTimerSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type CancelTimerRequest struct {
    PathParams CancelTimerPathParams 
    Security CancelTimerSecurity 
    
}

type CancelTimerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

