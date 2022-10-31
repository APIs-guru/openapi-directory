package operations



type GetNetworkWirelessAlternateManagementInterfacePathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkWirelessAlternateManagementInterfaceRequest struct {
    PathParams GetNetworkWirelessAlternateManagementInterfacePathParams 
    
}

type GetNetworkWirelessAlternateManagementInterfaceResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkWirelessAlternateManagementInterface200ApplicationJSONObject map[string]interface{} 
    
}

