package operations

import (
"openapi/pkg/models/shared")

type GetOfferingsOfferingIDBadgesPathParams struct {
    OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
    
}

type GetOfferingsOfferingIDBadgesRequest struct {
    PathParams GetOfferingsOfferingIDBadgesPathParams 
    
}

type GetOfferingsOfferingIDBadgesResponse struct {
    Badge *shared.Badge 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

