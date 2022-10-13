package operations

import (
	"openapi/pkg/models/shared"
)

type GetOfferingsOfferingIDAnalyticsSocialNotesPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type GetOfferingsOfferingIDAnalyticsSocialNotesRequest struct {
	PathParams GetOfferingsOfferingIDAnalyticsSocialNotesPathParams
}

type GetOfferingsOfferingIDAnalyticsSocialNotesResponse struct {
	ContentType          string
	Error                *shared.Error
	SocialNotesResponses []shared.SocialNotesResponse
	StatusCode           int64
}
