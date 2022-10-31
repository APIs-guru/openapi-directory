package operations



type UnenrollNetworkSmDevicePathParams struct {
    DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type UnenrollNetworkSmDeviceRequest struct {
    PathParams UnenrollNetworkSmDevicePathParams 
    
}

type UnenrollNetworkSmDeviceResponse struct {
    ContentType string 
    StatusCode int64 
    UnenrollNetworkSmDevice200ApplicationJSONObject map[string]interface{} 
    
}

