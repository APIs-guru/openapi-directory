package operations

import (
	"openapi/pkg/models/shared"
)

type GetOfferingsOfferingIDAssessmentsPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type GetOfferingsOfferingIDAssessmentsRequest struct {
	PathParams GetOfferingsOfferingIDAssessmentsPathParams
}

type GetOfferingsOfferingIDAssessmentsResponse struct {
	AssessmentResponses []shared.AssessmentResponse
	ContentType         string
	Error               *shared.Error
	StatusCode          int64
}
