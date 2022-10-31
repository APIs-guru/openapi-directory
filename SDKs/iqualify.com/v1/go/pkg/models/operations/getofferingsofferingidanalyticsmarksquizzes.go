package operations

import (
	"openapi/pkg/models/shared"
)

type GetOfferingsOfferingIDAnalyticsMarksQuizzesPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type GetOfferingsOfferingIDAnalyticsMarksQuizzesRequest struct {
	PathParams GetOfferingsOfferingIDAnalyticsMarksQuizzesPathParams
}

type GetOfferingsOfferingIDAnalyticsMarksQuizzesResponse struct {
	ContentType       string
	Error             *shared.Error
	QuizMarkResponses []shared.QuizMarkResponse
	StatusCode        int64
}
