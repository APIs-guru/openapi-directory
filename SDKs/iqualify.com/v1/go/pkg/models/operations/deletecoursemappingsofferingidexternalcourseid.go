package operations

import (
"openapi/pkg/models/shared")

type DeleteCourseMappingsOfferingIDExternalCourseIDPathParams struct {
    ExternalCourseID string `pathParam:"style=simple,explode=false,name=externalCourseId"`
    OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
    
}

type DeleteCourseMappingsOfferingIDExternalCourseIDRequest struct {
    PathParams DeleteCourseMappingsOfferingIDExternalCourseIDPathParams 
    
}

type DeleteCourseMappingsOfferingIDExternalCourseIDResponse struct {
    ContentType string 
    DeleteCourseMappingsOfferingIDExternalCourseID200ApplicationJSONStrings []string 
    Error *shared.Error 
    StatusCode int64 
    
}

