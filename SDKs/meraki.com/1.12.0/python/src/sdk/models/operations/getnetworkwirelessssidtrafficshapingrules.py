from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessSsidTrafficShapingRulesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessSsidTrafficShapingRulesRequest:
    path_params: GetNetworkWirelessSsidTrafficShapingRulesPathParams = field()
    

@dataclass
class GetNetworkWirelessSsidTrafficShapingRulesResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_wireless_ssid_traffic_shaping_rules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
