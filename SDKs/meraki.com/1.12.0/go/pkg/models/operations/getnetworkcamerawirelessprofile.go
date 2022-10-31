package operations



type GetNetworkCameraWirelessProfilePathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    WirelessProfileID string `pathParam:"style=simple,explode=false,name=wirelessProfileId"`
    
}

type GetNetworkCameraWirelessProfileRequest struct {
    PathParams GetNetworkCameraWirelessProfilePathParams 
    
}

type GetNetworkCameraWirelessProfileResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkCameraWirelessProfile200ApplicationJSONObject map[string]interface{} 
    
}

