package operations

import (
"openapi/pkg/models/shared")

type PatchUsersUserEmailPathParams struct {
    UserEmail string `pathParam:"style=simple,explode=false,name=userEmail"`
    
}

type PatchUsersUserEmailRequest struct {
    PathParams PatchUsersUserEmailPathParams 
    Request *shared.User `request:"mediaType=application/json"`
    
}

type PatchUsersUserEmailResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    UserResponse *shared.UserResponse 
    
}

