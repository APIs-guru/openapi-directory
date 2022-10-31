package operations

import (
"openapi/pkg/models/shared")

type GetCoursesResponse struct {
    ContentType string 
    CourseResponses []shared.CourseResponse 
    Error *shared.Error 
    StatusCode int64 
    
}

