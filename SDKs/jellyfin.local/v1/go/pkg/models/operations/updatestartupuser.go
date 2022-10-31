package operations

import (
"openapi/pkg/models/shared")

type UpdateStartupUserRequests struct {
    StartupUserDto *shared.StartupUserDto `request:"mediaType=application/*+json"`
    StartupUserDto1 *shared.StartupUserDto `request:"mediaType=application/json"`
    StartupUserDto2 *shared.StartupUserDto `request:"mediaType=text/json"`
    
}

type UpdateStartupUserSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type UpdateStartupUserRequest struct {
    Request *UpdateStartupUserRequests 
    Security UpdateStartupUserSecurity 
    
}

type UpdateStartupUserResponse struct {
    ContentType string 
    StatusCode int64 
    
}

