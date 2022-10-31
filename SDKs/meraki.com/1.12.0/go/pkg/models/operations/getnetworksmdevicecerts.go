package operations



type GetNetworkSmDeviceCertsPathParams struct {
    DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSmDeviceCertsRequest struct {
    PathParams GetNetworkSmDeviceCertsPathParams 
    
}

type GetNetworkSmDeviceCertsResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSmDeviceCerts200ApplicationJSONObject map[string]interface{} 
    
}

