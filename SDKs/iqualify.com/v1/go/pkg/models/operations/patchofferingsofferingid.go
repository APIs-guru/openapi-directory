package operations

import (
"openapi/pkg/models/shared")

type PatchOfferingsOfferingIDPathParams struct {
    OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
    
}

type PatchOfferingsOfferingIDRequest struct {
    PathParams PatchOfferingsOfferingIDPathParams 
    Request shared.Offering `request:"mediaType=application/json"`
    
}

type PatchOfferingsOfferingIDResponse struct {
    ContentType string 
    Error *shared.Error 
    OfferingMetadataResponse *shared.OfferingMetadataResponse 
    StatusCode int64 
    
}

