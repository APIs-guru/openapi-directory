package operations

import (
	"openapi/pkg/models/shared"
)

type GetOfferingsOfferingIDChannelsPathParams struct {
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type GetOfferingsOfferingIDChannelsRequest struct {
	PathParams GetOfferingsOfferingIDChannelsPathParams
}

type GetOfferingsOfferingIDChannelsResponse struct {
	ChannelResponses []shared.ChannelResponse
	ContentType      string
	Error            *shared.Error
	StatusCode       int64
}
