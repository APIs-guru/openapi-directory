from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceTrafficShapingUplinkBandwidthPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceTrafficShapingUplinkBandwidthRequest:
    path_params: GetNetworkApplianceTrafficShapingUplinkBandwidthPathParams = field()
    

@dataclass
class GetNetworkApplianceTrafficShapingUplinkBandwidthResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_traffic_shaping_uplink_bandwidth_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
