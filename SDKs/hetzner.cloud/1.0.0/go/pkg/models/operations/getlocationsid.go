package operations



type GetLocationsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetLocationsIDRequest struct {
    PathParams GetLocationsIDPathParams 
    
}

type GetLocationsID200ApplicationJSONLocation struct {
    City string `json:"city"`
    Country string `json:"country"`
    Description string `json:"description"`
    ID float64 `json:"id"`
    Latitude float64 `json:"latitude"`
    Longitude float64 `json:"longitude"`
    Name string `json:"name"`
    NetworkZone string `json:"network_zone"`
    
}

type GetLocationsID200ApplicationJSON struct {
    Location GetLocationsID200ApplicationJSONLocation `json:"location"`
    
}

type GetLocationsIDResponse struct {
    ContentType string 
    GetLocationsID200ApplicationJSONObject *GetLocationsID200ApplicationJSON 
    StatusCode int64 
    
}

