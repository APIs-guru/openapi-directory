package operations



type DeleteNetworkSwitchRoutingMulticastRendezvousPointPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    RendezvousPointID string `pathParam:"style=simple,explode=false,name=rendezvousPointId"`
    
}

type DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest struct {
    PathParams DeleteNetworkSwitchRoutingMulticastRendezvousPointPathParams 
    
}

type DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse struct {
    ContentType string 
    StatusCode int64 
    
}

