from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceTrafficShapingUplinkSelectionPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceTrafficShapingUplinkSelectionRequest:
    path_params: GetNetworkApplianceTrafficShapingUplinkSelectionPathParams = field()
    

@dataclass
class GetNetworkApplianceTrafficShapingUplinkSelectionResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_traffic_shaping_uplink_selection_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
