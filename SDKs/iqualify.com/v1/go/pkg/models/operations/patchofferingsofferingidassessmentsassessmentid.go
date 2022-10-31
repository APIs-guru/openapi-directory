package operations

import (
"openapi/pkg/models/shared")

type PatchOfferingsOfferingIDAssessmentsAssessmentIDPathParams struct {
    AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
    OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
    
}

type PatchOfferingsOfferingIDAssessmentsAssessmentIDRequest struct {
    PathParams PatchOfferingsOfferingIDAssessmentsAssessmentIDPathParams 
    Request shared.Assessment `request:"mediaType=application/json"`
    
}

type PatchOfferingsOfferingIDAssessmentsAssessmentIDResponse struct {
    AssessmentResponse *shared.AssessmentResponse 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

