package operations

import (
"openapi/pkg/models/shared")

type FaresSubscriptionsQueryParams struct {
    CabinClass string `queryParam:"style=form,explode=true,name=cabin-class"`
    Country *string `queryParam:"style=form,explode=true,name=country"`
    Destination string `queryParam:"style=form,explode=true,name=destination"`
    Email string `queryParam:"style=form,explode=true,name=email"`
    Lang string `queryParam:"style=form,explode=true,name=lang"`
    Origin string `queryParam:"style=form,explode=true,name=origin"`
    Trackingid *string `queryParam:"style=form,explode=true,name=trackingid"`
    TripDuration string `queryParam:"style=form,explode=true,name=trip-duration"`
    
}

type FaresSubscriptionsHeaders struct {
    Accept string `header:"style=simple,explode=false,name=Accept"`
    
}

type FaresSubscriptionsSecurity struct {
    Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
    
}

type FaresSubscriptionsRequest struct {
    QueryParams FaresSubscriptionsQueryParams 
    Headers FaresSubscriptionsHeaders 
    Security FaresSubscriptionsSecurity 
    
}

type FaresSubscriptionsResponse struct {
    ContentType string 
    FaresSubscriptions200ApplicationJSONString *string 
    StatusCode int64 
    
}

