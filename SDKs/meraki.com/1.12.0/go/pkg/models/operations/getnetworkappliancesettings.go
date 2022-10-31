package operations



type GetNetworkApplianceSettingsPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkApplianceSettingsRequest struct {
    PathParams GetNetworkApplianceSettingsPathParams 
    
}

type GetNetworkApplianceSettingsResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkApplianceSettings200ApplicationJSONObject map[string]interface{} 
    
}

