package operations

import (
"openapi/pkg/models/shared")

type GetUsersUserEmailPathParams struct {
    UserEmail string `pathParam:"style=simple,explode=false,name=userEmail"`
    
}

type GetUsersUserEmailRequest struct {
    PathParams GetUsersUserEmailPathParams 
    
}

type GetUsersUserEmailResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    UserResponse *shared.UserResponse 
    
}

