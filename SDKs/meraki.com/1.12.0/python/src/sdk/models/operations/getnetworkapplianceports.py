from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkAppliancePortsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkAppliancePortsRequest:
    path_params: GetNetworkAppliancePortsPathParams = field()
    

@dataclass
class GetNetworkAppliancePortsResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_ports_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
