package operations



type GetDatacentersIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetDatacentersIDRequest struct {
    PathParams GetDatacentersIDPathParams 
    
}

type GetDatacentersID200ApplicationJSONDatacenterLocation struct {
    City string `json:"city"`
    Country string `json:"country"`
    Description string `json:"description"`
    ID float64 `json:"id"`
    Latitude float64 `json:"latitude"`
    Longitude float64 `json:"longitude"`
    Name string `json:"name"`
    NetworkZone string `json:"network_zone"`
    
}

type GetDatacentersID200ApplicationJSONDatacenterServerTypes struct {
    Available []float64 `json:"available"`
    AvailableForMigration []float64 `json:"available_for_migration"`
    Supported []float64 `json:"supported"`
    
}

type GetDatacentersID200ApplicationJSONDatacenter struct {
    Description string `json:"description"`
    ID int64 `json:"id"`
    Location GetDatacentersID200ApplicationJSONDatacenterLocation `json:"location"`
    Name string `json:"name"`
    ServerTypes GetDatacentersID200ApplicationJSONDatacenterServerTypes `json:"server_types"`
    
}

type GetDatacentersID200ApplicationJSON struct {
    Datacenter GetDatacentersID200ApplicationJSONDatacenter `json:"datacenter"`
    
}

type GetDatacentersIDResponse struct {
    ContentType string 
    GetDatacentersID200ApplicationJSONObject *GetDatacentersID200ApplicationJSON 
    StatusCode int64 
    
}

