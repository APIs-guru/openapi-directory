package operations



type GetNetworkSmDeviceDeviceProfilesPathParams struct {
    DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSmDeviceDeviceProfilesRequest struct {
    PathParams GetNetworkSmDeviceDeviceProfilesPathParams 
    
}

type GetNetworkSmDeviceDeviceProfilesResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSmDeviceDeviceProfiles200ApplicationJSONObject map[string]interface{} 
    
}

