package operations

import (
"openapi/pkg/models/shared")

type OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetPathParams struct {
    AirportCode string `pathParam:"style=simple,explode=false,name=airportCode"`
    FromDateTime string `pathParam:"style=simple,explode=false,name=fromDateTime"`
    
}

type OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    
}

type OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetHeaders struct {
    Accept string `header:"style=simple,explode=false,name=Accept"`
    
}

type OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity struct {
    Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
    
}

type OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest struct {
    PathParams OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetPathParams 
    QueryParams OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetQueryParams 
    Headers OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetHeaders 
    Security OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity 
    
}

type OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse struct {
    ContentType string 
    OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

