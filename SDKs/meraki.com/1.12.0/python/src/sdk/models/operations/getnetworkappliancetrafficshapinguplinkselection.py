from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceTrafficShapingUplinkSelectionPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceTrafficShapingUplinkSelectionRequest:
    path_params: GetNetworkApplianceTrafficShapingUplinkSelectionPathParams = field(default=None)
    

@dataclass
class GetNetworkApplianceTrafficShapingUplinkSelectionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_appliance_traffic_shaping_uplink_selection_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
