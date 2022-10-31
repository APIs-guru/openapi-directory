package operations

import (
	"openapi/pkg/models/shared"
)

type GetOfferingsOfferingIDAnalyticsLearnersProgressPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type GetOfferingsOfferingIDAnalyticsLearnersProgressRequest struct {
	PathParams GetOfferingsOfferingIDAnalyticsLearnersProgressPathParams
}

type GetOfferingsOfferingIDAnalyticsLearnersProgressResponse struct {
	ContentType              string
	Error                    *shared.Error
	LearnerProgressResponses []shared.LearnerProgressResponse
	StatusCode               int64
}
