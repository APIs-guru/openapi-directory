package operations

import (
"openapi/pkg/models/shared")

type CreateTimerRequests struct {
    TimerInfoDto *shared.TimerInfoDto `request:"mediaType=application/*+json"`
    TimerInfoDto1 *shared.TimerInfoDto `request:"mediaType=application/json"`
    TimerInfoDto2 *shared.TimerInfoDto `request:"mediaType=text/json"`
    
}

type CreateTimerSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type CreateTimerRequest struct {
    Request *CreateTimerRequests 
    Security CreateTimerSecurity 
    
}

type CreateTimerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

