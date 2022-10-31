package operations

import (
	"openapi/pkg/models/shared"
)

type GetOfferingsOfferingIDAnalyticsChannelsChannelIDCommentsPathParams struct {
	ChannelID  string `pathParam:"style=simple,explode=false,name=channelId"`
	OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type GetOfferingsOfferingIDAnalyticsChannelsChannelIDCommentsRequest struct {
	PathParams GetOfferingsOfferingIDAnalyticsChannelsChannelIDCommentsPathParams
}

type GetOfferingsOfferingIDAnalyticsChannelsChannelIDCommentsResponse struct {
	Comments    []shared.Comment
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
