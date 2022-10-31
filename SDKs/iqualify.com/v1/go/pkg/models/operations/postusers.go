package operations

import (
"openapi/pkg/models/shared")

type PostUsersRequest struct {
    Request shared.User `request:"mediaType=application/json"`
    
}

type PostUsersResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    UserResponse *shared.UserResponse 
    
}

