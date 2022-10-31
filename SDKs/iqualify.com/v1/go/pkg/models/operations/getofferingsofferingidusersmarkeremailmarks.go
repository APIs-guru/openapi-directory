package operations

import (
"openapi/pkg/models/shared")

type GetOfferingsOfferingIDUsersMarkerEmailMarksPathParams struct {
    MarkerEmail string `pathParam:"style=simple,explode=false,name=markerEmail"`
    OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
    
}

type GetOfferingsOfferingIDUsersMarkerEmailMarksRequest struct {
    PathParams GetOfferingsOfferingIDUsersMarkerEmailMarksPathParams 
    
}

type GetOfferingsOfferingIDUsersMarkerEmailMarksResponse struct {
    ContentType string 
    Error *shared.Error 
    OfferingUsers []shared.OfferingUser 
    StatusCode int64 
    
}

