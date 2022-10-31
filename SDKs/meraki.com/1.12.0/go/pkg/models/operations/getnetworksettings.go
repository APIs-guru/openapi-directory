package operations



type GetNetworkSettingsPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSettingsRequest struct {
    PathParams GetNetworkSettingsPathParams 
    
}

type GetNetworkSettingsResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSettings200ApplicationJSONObject map[string]interface{} 
    
}

