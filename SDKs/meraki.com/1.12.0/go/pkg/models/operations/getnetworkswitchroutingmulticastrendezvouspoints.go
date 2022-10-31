package operations



type GetNetworkSwitchRoutingMulticastRendezvousPointsPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSwitchRoutingMulticastRendezvousPointsRequest struct {
    PathParams GetNetworkSwitchRoutingMulticastRendezvousPointsPathParams 
    
}

type GetNetworkSwitchRoutingMulticastRendezvousPointsResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJSONObject map[string]interface{} 
    
}

