package operations

import (
	"openapi/pkg/models/shared"
)

type GetOfferingsOfferingIDAnalyticsUnitReactionsPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type GetOfferingsOfferingIDAnalyticsUnitReactionsRequest struct {
	PathParams GetOfferingsOfferingIDAnalyticsUnitReactionsPathParams
}

type GetOfferingsOfferingIDAnalyticsUnitReactionsResponse struct {
	ContentType                     string
	Error                           *shared.Error
	StatusCode                      int64
	UnitReactionsAnalyticsResponses []shared.UnitReactionsAnalyticsResponse
}
