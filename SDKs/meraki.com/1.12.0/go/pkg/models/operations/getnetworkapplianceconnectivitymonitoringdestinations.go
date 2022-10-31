package operations



type GetNetworkApplianceConnectivityMonitoringDestinationsPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkApplianceConnectivityMonitoringDestinationsRequest struct {
    PathParams GetNetworkApplianceConnectivityMonitoringDestinationsPathParams 
    
}

type GetNetworkApplianceConnectivityMonitoringDestinationsResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject map[string]interface{} 
    
}

