package operations

import (
"openapi/pkg/models/shared")

type OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams struct {
    CabinClass string `pathParam:"style=simple,explode=false,name=cabinClass"`
    Date string `pathParam:"style=simple,explode=false,name=date"`
    Destination string `pathParam:"style=simple,explode=false,name=destination"`
    FlightNumber string `pathParam:"style=simple,explode=false,name=flightNumber"`
    Origin string `pathParam:"style=simple,explode=false,name=origin"`
    
}

type OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders struct {
    Accept string `header:"style=simple,explode=false,name=Accept"`
    
}

type OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity struct {
    Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
    
}

type OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest struct {
    PathParams OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams 
    Headers OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders 
    Security OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity 
    
}

type OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse struct {
    ContentType string 
    OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

