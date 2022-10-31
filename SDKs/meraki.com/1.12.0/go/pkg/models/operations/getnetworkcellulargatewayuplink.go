package operations



type GetNetworkCellularGatewayUplinkPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkCellularGatewayUplinkRequest struct {
    PathParams GetNetworkCellularGatewayUplinkPathParams 
    
}

type GetNetworkCellularGatewayUplinkResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkCellularGatewayUplink200ApplicationJSONObject map[string]interface{} 
    
}

