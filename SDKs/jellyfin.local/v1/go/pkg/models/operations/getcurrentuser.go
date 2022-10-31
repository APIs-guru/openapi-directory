package operations

import (
"openapi/pkg/models/shared")

type GetCurrentUserSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetCurrentUserRequest struct {
    Security GetCurrentUserSecurity 
    
}

type GetCurrentUserResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    UserDto *shared.UserDto 
    
}

