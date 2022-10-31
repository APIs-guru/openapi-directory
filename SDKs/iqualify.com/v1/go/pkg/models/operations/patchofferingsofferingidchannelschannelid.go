package operations

import (
"openapi/pkg/models/shared")

type PatchOfferingsOfferingIDChannelsChannelIDPathParams struct {
    ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
    OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
    
}

type PatchOfferingsOfferingIDChannelsChannelIDRequest struct {
    PathParams PatchOfferingsOfferingIDChannelsChannelIDPathParams 
    Request shared.Channel `request:"mediaType=application/json"`
    
}

type PatchOfferingsOfferingIDChannelsChannelIDResponse struct {
    ChannelResponse *shared.ChannelResponse 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

