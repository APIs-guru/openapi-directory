package operations

import (
"openapi/pkg/models/shared")

type GetOfferingsOfferingIDChannelsChannelIDLearnersPathParams struct {
    ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
    OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
    
}

type GetOfferingsOfferingIDChannelsChannelIDLearnersRequest struct {
    PathParams GetOfferingsOfferingIDChannelsChannelIDLearnersPathParams 
    
}

type GetOfferingsOfferingIDChannelsChannelIDLearnersResponse struct {
    ChannelResponse *shared.ChannelResponse 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

