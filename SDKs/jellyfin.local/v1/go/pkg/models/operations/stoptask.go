package operations

import (
"openapi/pkg/models/shared")

type StopTaskPathParams struct {
    TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
    
}

type StopTaskSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type StopTaskRequest struct {
    PathParams StopTaskPathParams 
    Security StopTaskSecurity 
    
}

type StopTaskResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

