from dataclasses import dataclass, field



@dataclass
class DeleteNetworkApplianceVlanPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    vlan_id: str = field(metadata={'path_param': { 'field_name': 'vlanId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkApplianceVlanRequest:
    path_params: DeleteNetworkApplianceVlanPathParams = field()
    

@dataclass
class DeleteNetworkApplianceVlanResponse:
    content_type: str = field()
    status_code: int = field()
    
