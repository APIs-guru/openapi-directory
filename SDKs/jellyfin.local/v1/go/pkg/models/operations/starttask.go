package operations

import (
"openapi/pkg/models/shared")

type StartTaskPathParams struct {
    TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
    
}

type StartTaskSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type StartTaskRequest struct {
    PathParams StartTaskPathParams 
    Security StartTaskSecurity 
    
}

type StartTaskResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

