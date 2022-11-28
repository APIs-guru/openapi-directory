from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceVlanPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    vlan_id: str = field(metadata={'path_param': { 'field_name': 'vlanId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceVlanRequest:
    path_params: GetNetworkApplianceVlanPathParams = field()
    

@dataclass
class GetNetworkApplianceVlanResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_vlan_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
