from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkAppliancePortPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    port_id: str = field(default=None, metadata={'path_param': { 'field_name': 'portId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkAppliancePortRequest:
    path_params: GetNetworkAppliancePortPathParams = field(default=None)
    

@dataclass
class GetNetworkAppliancePortResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_appliance_port_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
