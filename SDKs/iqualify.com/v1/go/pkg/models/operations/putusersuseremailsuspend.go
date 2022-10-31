package operations

import (
"openapi/pkg/models/shared")

type PutUsersUserEmailSuspendPathParams struct {
    UserEmail string `pathParam:"style=simple,explode=false,name=userEmail"`
    
}

type PutUsersUserEmailSuspendRequest struct {
    PathParams PutUsersUserEmailSuspendPathParams 
    Request shared.SuspendedRequest `request:"mediaType=application/json"`
    
}

type PutUsersUserEmailSuspendResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

