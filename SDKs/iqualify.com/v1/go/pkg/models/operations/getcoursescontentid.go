package operations

import (
"openapi/pkg/models/shared")

type GetCoursesContentIDPathParams struct {
    ContentID string `pathParam:"style=simple,explode=false,name=contentId"`
    
}

type GetCoursesContentIDRequest struct {
    PathParams GetCoursesContentIDPathParams 
    
}

type GetCoursesContentIDResponse struct {
    ContentType string 
    CourseMetaResponse *shared.CourseMetaResponse 
    Error *shared.Error 
    StatusCode int64 
    
}

