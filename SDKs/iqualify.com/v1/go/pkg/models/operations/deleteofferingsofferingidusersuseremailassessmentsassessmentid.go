package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteOfferingsOfferingIDUsersUserEmailAssessmentsAssessmentIDPathParams struct {
	AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
	OfferingID   string `pathParam:"style=simple,explode=false,name=offeringId"`
	UserEmail    string `pathParam:"style=simple,explode=false,name=userEmail"`
}

type DeleteOfferingsOfferingIDUsersUserEmailAssessmentsAssessmentIDRequest struct {
	PathParams DeleteOfferingsOfferingIDUsersUserEmailAssessmentsAssessmentIDPathParams
}

type DeleteOfferingsOfferingIDUsersUserEmailAssessmentsAssessmentIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
