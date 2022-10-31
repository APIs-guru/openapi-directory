package operations

import (
"openapi/pkg/models/shared")

type GetTaskPathParams struct {
    TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
    
}

type GetTaskSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetTaskRequest struct {
    PathParams GetTaskPathParams 
    Security GetTaskSecurity 
    
}

type GetTaskResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    TaskInfo *shared.TaskInfo 
    
}

