package operations

import (
	"openapi/pkg/models/shared"
)

type GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentIDPathParams struct {
	AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
	OfferingID   string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentIDRequest struct {
	PathParams GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentIDPathParams
}

type GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentIDResponse struct {
	ContentType             string
	Error                   *shared.Error
	StatusCode              int64
	SubmissionMarkResponses []interface{}
}
