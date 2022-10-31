package operations

import (
"openapi/pkg/models/shared")

type CreateUserByNameRequests struct {
    CreateUserByName *shared.CreateUserByName `request:"mediaType=application/*+json"`
    CreateUserByName1 *shared.CreateUserByName `request:"mediaType=application/json"`
    CreateUserByName2 *shared.CreateUserByName `request:"mediaType=text/json"`
    
}

type CreateUserByNameSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type CreateUserByNameRequest struct {
    Request CreateUserByNameRequests 
    Security CreateUserByNameSecurity 
    
}

type CreateUserByNameResponse struct {
    ContentType string 
    StatusCode int64 
    UserDto *shared.UserDto 
    
}

