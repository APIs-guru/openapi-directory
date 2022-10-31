package operations

import (
"openapi/pkg/models/shared")

type AuthenticateUserByNameRequests struct {
    AuthenticateUserByName *shared.AuthenticateUserByName `request:"mediaType=application/*+json"`
    AuthenticateUserByName1 *shared.AuthenticateUserByName `request:"mediaType=application/json"`
    AuthenticateUserByName2 *shared.AuthenticateUserByName `request:"mediaType=text/json"`
    
}

type AuthenticateUserByNameRequest struct {
    Request AuthenticateUserByNameRequests 
    
}

type AuthenticateUserByNameResponse struct {
    AuthenticationResult *shared.AuthenticationResult 
    ContentType string 
    StatusCode int64 
    
}

