package operations



type GetNetworkSwitchSettingsPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSwitchSettingsRequest struct {
    PathParams GetNetworkSwitchSettingsPathParams 
    
}

type GetNetworkSwitchSettingsResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSwitchSettings200ApplicationJSONObject map[string]interface{} 
    
}

