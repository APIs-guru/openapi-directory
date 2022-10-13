from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular:
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitDown' }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitUp' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1:
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitDown' }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitUp' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2:
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitDown' }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitUp' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits:
    cellular: Optional[UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cellular' }})
    wan1: Optional[UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wan1' }})
    wan2: Optional[UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wan2' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody:
    bandwidth_limits: Optional[UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidthLimits' }})
    

@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest:
    path_params: UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams = field(default=None)
    request: Optional[UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_traffic_shaping_uplink_bandwidth_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
