package operations



type GetNetworkSmDeviceSecurityCentersPathParams struct {
    DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSmDeviceSecurityCentersRequest struct {
    PathParams GetNetworkSmDeviceSecurityCentersPathParams 
    
}

type GetNetworkSmDeviceSecurityCentersResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSmDeviceSecurityCenters200ApplicationJSONObject map[string]interface{} 
    
}

