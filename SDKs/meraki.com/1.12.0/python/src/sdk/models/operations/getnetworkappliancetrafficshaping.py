from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceTrafficShapingPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceTrafficShapingRequest:
    path_params: GetNetworkApplianceTrafficShapingPathParams = field(default=None)
    

@dataclass
class GetNetworkApplianceTrafficShapingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_appliance_traffic_shaping_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
