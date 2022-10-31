package operations

import (
"openapi/pkg/models/shared")

type GetRecordingGroupPathParams struct {
    GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
    
}

type GetRecordingGroupSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRecordingGroupRequest struct {
    PathParams GetRecordingGroupPathParams 
    Security GetRecordingGroupSecurity 
    
}

type GetRecordingGroupResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

