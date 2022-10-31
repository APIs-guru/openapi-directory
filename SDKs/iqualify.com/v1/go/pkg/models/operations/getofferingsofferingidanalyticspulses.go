package operations

import (
	"openapi/pkg/models/shared"
)

type GetOfferingsOfferingIDAnalyticsPulsesPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type GetOfferingsOfferingIDAnalyticsPulsesRequest struct {
	PathParams GetOfferingsOfferingIDAnalyticsPulsesPathParams
}

type GetOfferingsOfferingIDAnalyticsPulsesResponse struct {
	ContentType                                                    string
	Error                                                          *shared.Error
	GetOfferingsOfferingIDAnalyticsPulses200ApplicationJSONStrings []string
	StatusCode                                                     int64
}
