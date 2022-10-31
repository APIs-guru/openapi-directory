package operations

import (
	"openapi/pkg/models/shared"
)

type GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponsesPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
	PulseID    string `pathParam:"style=simple,explode=false,name=pulseId"`
}

type GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponsesRequest struct {
	PathParams GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponsesPathParams
}

type GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponsesResponse struct {
	ContentType    string
	Error          *shared.Error
	PulseResponses []shared.PulseResponse
	StatusCode     int64
}
