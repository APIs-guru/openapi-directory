package operations



type GetNetworkSmDeviceRestrictionsPathParams struct {
    DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSmDeviceRestrictionsRequest struct {
    PathParams GetNetworkSmDeviceRestrictionsPathParams 
    
}

type GetNetworkSmDeviceRestrictionsResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSmDeviceRestrictions200ApplicationJSONObject map[string]interface{} 
    
}

