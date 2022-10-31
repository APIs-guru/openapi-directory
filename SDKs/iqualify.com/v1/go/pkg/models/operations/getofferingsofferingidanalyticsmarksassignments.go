package operations

import (
"openapi/pkg/models/shared")

type GetOfferingsOfferingIDAnalyticsMarksAssignmentsPathParams struct {
    OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
    
}

type GetOfferingsOfferingIDAnalyticsMarksAssignmentsRequest struct {
    PathParams GetOfferingsOfferingIDAnalyticsMarksAssignmentsPathParams 
    
}

type GetOfferingsOfferingIDAnalyticsMarksAssignmentsResponse struct {
    AssignmentMarkResponses []shared.AssignmentMarkResponse 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

