package operations



type GetNetworkClientUsageHistoryPathParams struct {
    ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkClientUsageHistoryRequest struct {
    PathParams GetNetworkClientUsageHistoryPathParams 
    
}

type GetNetworkClientUsageHistoryResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkClientUsageHistory200ApplicationJSONObject map[string]interface{} 
    
}

