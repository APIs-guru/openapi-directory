package operations

import (
"openapi/pkg/models/shared")

type AuthenticateUserPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type AuthenticateUserQueryParams struct {
    Password *string `queryParam:"style=form,explode=true,name=password"`
    Pw string `queryParam:"style=form,explode=true,name=pw"`
    
}

type AuthenticateUserRequest struct {
    PathParams AuthenticateUserPathParams 
    QueryParams AuthenticateUserQueryParams 
    
}

type AuthenticateUserResponse struct {
    AuthenticationResult *shared.AuthenticationResult 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

