package operations

import (
"openapi/pkg/models/shared")

type GetOfferingsOfferingIDLearnersPendingSubmissionPathParams struct {
    OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
    
}

type GetOfferingsOfferingIDLearnersPendingSubmissionQueryParams struct {
    Days *string `queryParam:"style=form,explode=true,name=days"`
    
}

type GetOfferingsOfferingIDLearnersPendingSubmissionRequest struct {
    PathParams GetOfferingsOfferingIDLearnersPendingSubmissionPathParams 
    QueryParams GetOfferingsOfferingIDLearnersPendingSubmissionQueryParams 
    
}

type GetOfferingsOfferingIDLearnersPendingSubmissionResponse struct {
    AssessmentPendingSubmissions []shared.AssessmentPendingSubmission 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

