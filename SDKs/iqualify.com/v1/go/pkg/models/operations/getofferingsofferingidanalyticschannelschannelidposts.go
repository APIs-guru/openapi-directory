package operations

import (
"openapi/pkg/models/shared")

type GetOfferingsOfferingIDAnalyticsChannelsChannelIDPostsPathParams struct {
    ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
    OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
    
}

type GetOfferingsOfferingIDAnalyticsChannelsChannelIDPostsRequest struct {
    PathParams GetOfferingsOfferingIDAnalyticsChannelsChannelIDPostsPathParams 
    
}

type GetOfferingsOfferingIDAnalyticsChannelsChannelIDPostsResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    HTTPPosts []shared.HTTPPost 
    
}

