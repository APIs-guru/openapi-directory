package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailPathParams struct {
	AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
	OfferingID   string `pathParam:"style=simple,explode=false,name=offeringId"`
	UserEmail    string `pathParam:"style=simple,explode=false,name=userEmail"`
}

type PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailRequestBody struct {
	DueDate *time.Time `json:"dueDate"`
}

type PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailRequest struct {
	PathParams PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailPathParams
	Request    PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailRequestBody `request:"mediaType=application/json"`
}

type PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
