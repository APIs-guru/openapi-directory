package operations

import (
"openapi/pkg/models/shared")

type GetOfferingsOfferingIDAnalyticsChannelsChannelIDRepliesPathParams struct {
    ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
    OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
    
}

type GetOfferingsOfferingIDAnalyticsChannelsChannelIDRepliesRequest struct {
    PathParams GetOfferingsOfferingIDAnalyticsChannelsChannelIDRepliesPathParams 
    
}

type GetOfferingsOfferingIDAnalyticsChannelsChannelIDRepliesResponse struct {
    Comments []shared.Comment 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

