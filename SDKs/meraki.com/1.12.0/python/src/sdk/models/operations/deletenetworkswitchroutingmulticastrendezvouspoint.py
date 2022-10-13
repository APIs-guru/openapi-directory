from dataclasses import dataclass, field



@dataclass
class DeleteNetworkSwitchRoutingMulticastRendezvousPointPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    rendezvous_point_id: str = field(default=None, metadata={'path_param': { 'field_name': 'rendezvousPointId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest:
    path_params: DeleteNetworkSwitchRoutingMulticastRendezvousPointPathParams = field(default=None)
    

@dataclass
class DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
