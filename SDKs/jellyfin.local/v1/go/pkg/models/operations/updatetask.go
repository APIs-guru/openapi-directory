package operations

import (
"openapi/pkg/models/shared")

type UpdateTaskPathParams struct {
    TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
    
}

type UpdateTaskRequests struct {
    TaskTriggerInfos []shared.TaskTriggerInfo `request:"mediaType=application/*+json"`
    TaskTriggerInfos1 []shared.TaskTriggerInfo `request:"mediaType=application/json"`
    TaskTriggerInfos2 []shared.TaskTriggerInfo `request:"mediaType=text/json"`
    
}

type UpdateTaskSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type UpdateTaskRequest struct {
    PathParams UpdateTaskPathParams 
    Request UpdateTaskRequests 
    Security UpdateTaskSecurity 
    
}

type UpdateTaskResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

