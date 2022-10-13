from dataclasses import dataclass, field



@dataclass
class DeleteNetworkApplianceVlanPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    vlan_id: str = field(default=None, metadata={'path_param': { 'field_name': 'vlanId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkApplianceVlanRequest:
    path_params: DeleteNetworkApplianceVlanPathParams = field(default=None)
    

@dataclass
class DeleteNetworkApplianceVlanResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
