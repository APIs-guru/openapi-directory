package operations

import (
	"openapi/pkg/models/shared"
)

type PostOfferingsOfferingIDChannelsChannelIDLearnersPathParams struct {
	ChannelID  string `pathParam:"style=simple,explode=false,name=channelId"`
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type PostOfferingsOfferingIDChannelsChannelIDLearnersRequestBody struct {
	Email *string `json:"email,omitempty"`
}

type PostOfferingsOfferingIDChannelsChannelIDLearnersRequest struct {
	PathParams PostOfferingsOfferingIDChannelsChannelIDLearnersPathParams
	Request    PostOfferingsOfferingIDChannelsChannelIDLearnersRequestBody `request:"mediaType=application/json"`
}

type PostOfferingsOfferingIDChannelsChannelIDLearnersResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
