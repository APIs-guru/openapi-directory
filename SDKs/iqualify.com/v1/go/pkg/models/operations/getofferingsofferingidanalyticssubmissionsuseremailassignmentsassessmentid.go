package operations

import (
	"openapi/pkg/models/shared"
)

type GetOfferingsOfferingIDAnalyticsSubmissionsUserEmailAssignmentsAssessmentIDPathParams struct {
	AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
	OfferingID   string `pathParam:"style=simple,explode=false,name=offeringId"`
	UserEmail    string `pathParam:"style=simple,explode=false,name=userEmail"`
}

type GetOfferingsOfferingIDAnalyticsSubmissionsUserEmailAssignmentsAssessmentIDRequest struct {
	PathParams GetOfferingsOfferingIDAnalyticsSubmissionsUserEmailAssignmentsAssessmentIDPathParams
}

type GetOfferingsOfferingIDAnalyticsSubmissionsUserEmailAssignmentsAssessmentIDResponse struct {
	ContentType             string
	Error                   *shared.Error
	StatusCode              int64
	SubmissionMarkResponses []interface{}
}
