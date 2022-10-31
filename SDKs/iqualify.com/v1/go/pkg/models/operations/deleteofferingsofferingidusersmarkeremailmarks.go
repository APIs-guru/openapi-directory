package operations

import (
"openapi/pkg/models/shared")

type DeleteOfferingsOfferingIDUsersMarkerEmailMarksPathParams struct {
    MarkerEmail string `pathParam:"style=simple,explode=false,name=markerEmail"`
    OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
    
}

type DeleteOfferingsOfferingIDUsersMarkerEmailMarksRequest struct {
    PathParams DeleteOfferingsOfferingIDUsersMarkerEmailMarksPathParams 
    Request []string `request:"mediaType=application/json"`
    
}

type DeleteOfferingsOfferingIDUsersMarkerEmailMarksResponse struct {
    ContentType string 
    Error *shared.Error 
    OfferingUsers []shared.OfferingUser 
    StatusCode int64 
    
}

