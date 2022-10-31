package operations

import (
"openapi/pkg/models/shared")

type GetOfferingsOfferingIDPathParams struct {
    OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
    
}

type GetOfferingsOfferingIDRequest struct {
    PathParams GetOfferingsOfferingIDPathParams 
    
}

type GetOfferingsOfferingIDResponse struct {
    ContentType string 
    Error *shared.Error 
    OfferingMetadataResponse *shared.OfferingMetadataResponse 
    StatusCode int64 
    
}

