package operations

import (
"openapi/pkg/models/shared")

type DeleteOfferingsOfferingIDChannelsChannelIDLearnersPathParams struct {
    ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
    OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
    
}

type DeleteOfferingsOfferingIDChannelsChannelIDLearnersRequestBody struct {
    Email *string `json:"email,omitempty"`
    
}

type DeleteOfferingsOfferingIDChannelsChannelIDLearnersRequest struct {
    PathParams DeleteOfferingsOfferingIDChannelsChannelIDLearnersPathParams 
    Request DeleteOfferingsOfferingIDChannelsChannelIDLearnersRequestBody `request:"mediaType=application/json"`
    
}

type DeleteOfferingsOfferingIDChannelsChannelIDLearnersResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

