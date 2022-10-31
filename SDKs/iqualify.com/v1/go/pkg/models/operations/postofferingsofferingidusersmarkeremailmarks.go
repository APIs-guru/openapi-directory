package operations

import (
"openapi/pkg/models/shared")

type PostOfferingsOfferingIDUsersMarkerEmailMarksPathParams struct {
    MarkerEmail string `pathParam:"style=simple,explode=false,name=markerEmail"`
    OfferingID string `pathParam:"style=simple,explode=false,name=offeringId"`
    
}

type PostOfferingsOfferingIDUsersMarkerEmailMarksRequest struct {
    PathParams PostOfferingsOfferingIDUsersMarkerEmailMarksPathParams 
    Request []string `request:"mediaType=application/json"`
    
}

type PostOfferingsOfferingIDUsersMarkerEmailMarksResponse struct {
    ContentType string 
    Error *shared.Error 
    OfferingUsers []shared.OfferingUser 
    StatusCode int64 
    
}

