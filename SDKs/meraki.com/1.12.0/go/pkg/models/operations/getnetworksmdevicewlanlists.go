package operations



type GetNetworkSmDeviceWlanListsPathParams struct {
    DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSmDeviceWlanListsRequest struct {
    PathParams GetNetworkSmDeviceWlanListsPathParams 
    
}

type GetNetworkSmDeviceWlanListsResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSmDeviceWlanLists200ApplicationJSONObject map[string]interface{} 
    
}

