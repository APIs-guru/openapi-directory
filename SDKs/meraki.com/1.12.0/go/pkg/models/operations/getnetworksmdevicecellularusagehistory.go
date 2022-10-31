package operations



type GetNetworkSmDeviceCellularUsageHistoryPathParams struct {
    DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSmDeviceCellularUsageHistoryRequest struct {
    PathParams GetNetworkSmDeviceCellularUsageHistoryPathParams 
    
}

type GetNetworkSmDeviceCellularUsageHistoryResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSmDeviceCellularUsageHistory200ApplicationJSONObject map[string]interface{} 
    
}

