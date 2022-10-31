package operations

import (
"openapi/pkg/models/shared")

type GetCoursesContentIDActivationsPathParams struct {
    ContentID string `pathParam:"style=simple,explode=false,name=contentId"`
    
}

type GetCoursesContentIDActivationsRequest struct {
    PathParams GetCoursesContentIDActivationsPathParams 
    
}

type GetCoursesContentIDActivationsResponse struct {
    ActivationResponse *shared.ActivationResponse 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

