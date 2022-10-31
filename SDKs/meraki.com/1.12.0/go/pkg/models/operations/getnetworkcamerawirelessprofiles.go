package operations



type GetNetworkCameraWirelessProfilesPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkCameraWirelessProfilesRequest struct {
    PathParams GetNetworkCameraWirelessProfilesPathParams 
    
}

type GetNetworkCameraWirelessProfilesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkCameraWirelessProfiles200ApplicationJSONObject map[string]interface{} 
    
}

