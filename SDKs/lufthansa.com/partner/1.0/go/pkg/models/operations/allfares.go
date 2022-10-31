package operations

import (
"openapi/pkg/models/shared")

type AllFaresQueryParams struct {
    CabinClass *string `queryParam:"style=form,explode=true,name=cabin-class"`
    Catalogues string `queryParam:"style=form,explode=true,name=catalogues"`
    Destination string `queryParam:"style=form,explode=true,name=destination"`
    FareFamily *string `queryParam:"style=form,explode=true,name=fare-family"`
    Origin string `queryParam:"style=form,explode=true,name=origin"`
    ReturnDate *string `queryParam:"style=form,explode=true,name=return-date"`
    Trackingid *string `queryParam:"style=form,explode=true,name=trackingid"`
    TravelDate string `queryParam:"style=form,explode=true,name=travel-date"`
    Travelers *string `queryParam:"style=form,explode=true,name=travelers"`
    
}

type AllFaresHeaders struct {
    Accept *string `header:"style=simple,explode=false,name=Accept"`
    
}

type AllFaresSecurity struct {
    Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
    
}

type AllFaresRequest struct {
    QueryParams AllFaresQueryParams 
    Headers AllFaresHeaders 
    Security AllFaresSecurity 
    
}

type AllFaresResponse struct {
    AllFares200ApplicationJSONString *string 
    ContentType string 
    StatusCode int64 
    
}

