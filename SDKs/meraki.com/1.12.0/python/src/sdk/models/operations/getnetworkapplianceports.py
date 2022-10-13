from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkAppliancePortsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkAppliancePortsRequest:
    path_params: GetNetworkAppliancePortsPathParams = field(default=None)
    

@dataclass
class GetNetworkAppliancePortsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_appliance_ports_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
