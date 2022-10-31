package operations

import (
"openapi/pkg/models/shared")

type ReferencesAircraftByAircraftCodeGetPathParams struct {
    AircraftCode string `pathParam:"style=simple,explode=false,name=aircraftCode"`
    
}

type ReferencesAircraftByAircraftCodeGetQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    
}

type ReferencesAircraftByAircraftCodeGetHeaders struct {
    Accept string `header:"style=simple,explode=false,name=Accept"`
    
}

type ReferencesAircraftByAircraftCodeGetSecurity struct {
    Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
    
}

type ReferencesAircraftByAircraftCodeGetRequest struct {
    PathParams ReferencesAircraftByAircraftCodeGetPathParams 
    QueryParams ReferencesAircraftByAircraftCodeGetQueryParams 
    Headers ReferencesAircraftByAircraftCodeGetHeaders 
    Security ReferencesAircraftByAircraftCodeGetSecurity 
    
}

type ReferencesAircraftByAircraftCodeGetResponse struct {
    ContentType string 
    ReferencesAircraftByAircraftCodeGet200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

