package operations



type UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    RendezvousPointID string `pathParam:"style=simple,explode=false,name=rendezvousPointId"`
    
}

type UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody struct {
    InterfaceIP string `json:"interfaceIp"`
    MulticastGroup string `json:"multicastGroup"`
    
}

type UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest struct {
    PathParams UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams 
    Request UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject map[string]interface{} 
    
}

