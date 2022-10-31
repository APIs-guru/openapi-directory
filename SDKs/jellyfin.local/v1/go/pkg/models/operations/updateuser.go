package operations

import (
"openapi/pkg/models/shared")

type UpdateUserPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type UpdateUserRequests struct {
    UserDto *shared.UserDto `request:"mediaType=application/*+json"`
    UserDto1 *shared.UserDto `request:"mediaType=application/json"`
    UserDto2 *shared.UserDto `request:"mediaType=text/json"`
    
}

type UpdateUserSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type UpdateUserRequest struct {
    PathParams UpdateUserPathParams 
    Request UpdateUserRequests 
    Security UpdateUserSecurity 
    
}

type UpdateUserResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

