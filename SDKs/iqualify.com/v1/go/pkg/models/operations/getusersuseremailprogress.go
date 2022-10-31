package operations

import (
"openapi/pkg/models/shared")

type GetUsersUserEmailProgressPathParams struct {
    UserEmail string `pathParam:"style=simple,explode=false,name=userEmail"`
    
}

type GetUsersUserEmailProgressRequest struct {
    PathParams GetUsersUserEmailProgressPathParams 
    
}

type GetUsersUserEmailProgressResponse struct {
    ContentType string 
    Error *shared.Error 
    LearnerResponse *shared.LearnerResponse 
    StatusCode int64 
    
}

