package operations

import (
"openapi/pkg/models/shared")

type GetCoursesContentIDPermissionsPathParams struct {
    ContentID string `pathParam:"style=simple,explode=false,name=contentId"`
    
}

type GetCoursesContentIDPermissionsRequest struct {
    PathParams GetCoursesContentIDPermissionsPathParams 
    
}

type GetCoursesContentIDPermissionsResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    UserPermission *interface{} 
    
}

