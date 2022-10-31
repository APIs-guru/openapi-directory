package operations



type GetNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest struct {
    PathParams GetNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams 
    
}

type GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject map[string]interface{} 
    
}

