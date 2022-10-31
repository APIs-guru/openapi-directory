package operations

import (
"openapi/pkg/models/shared")

type PostOfferingsOfferingIDChannelsPathParams struct {
    OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
    
}

type PostOfferingsOfferingIDChannelsRequest struct {
    PathParams PostOfferingsOfferingIDChannelsPathParams 
    Request shared.ChannelRequired `request:"mediaType=application/json"`
    
}

type PostOfferingsOfferingIDChannelsResponse struct {
    ChannelResponse *shared.ChannelResponse 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

