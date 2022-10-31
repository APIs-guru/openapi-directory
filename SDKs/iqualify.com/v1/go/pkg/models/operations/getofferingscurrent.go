package operations

import (
"openapi/pkg/models/shared")

type GetOfferingsCurrentResponse struct {
    ContentType string 
    Error *shared.Error 
    OfferingMetadataResponses []shared.OfferingMetadataResponse 
    StatusCode int64 
    
}

