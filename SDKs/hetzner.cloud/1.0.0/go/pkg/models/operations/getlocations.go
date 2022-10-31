package operations



type GetLocationsQueryParams struct {
    Name *string `queryParam:"style=form,explode=true,name=name"`
    
}

type GetLocationsRequest struct {
    QueryParams GetLocationsQueryParams 
    
}

type GetLocations200ApplicationJSONLocations struct {
    City string `json:"city"`
    Country string `json:"country"`
    Description string `json:"description"`
    ID float64 `json:"id"`
    Latitude float64 `json:"latitude"`
    Longitude float64 `json:"longitude"`
    Name string `json:"name"`
    NetworkZone string `json:"network_zone"`
    
}

type GetLocations200ApplicationJSON struct {
    Locations []GetLocations200ApplicationJSONLocations `json:"locations"`
    
}

type GetLocationsResponse struct {
    ContentType string 
    GetLocations200ApplicationJSONObject *GetLocations200ApplicationJSON 
    StatusCode int64 
    
}

