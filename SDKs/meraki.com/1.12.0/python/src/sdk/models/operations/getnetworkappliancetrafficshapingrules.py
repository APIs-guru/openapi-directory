from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceTrafficShapingRulesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceTrafficShapingRulesRequest:
    path_params: GetNetworkApplianceTrafficShapingRulesPathParams = field(default=None)
    

@dataclass
class GetNetworkApplianceTrafficShapingRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_appliance_traffic_shaping_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
