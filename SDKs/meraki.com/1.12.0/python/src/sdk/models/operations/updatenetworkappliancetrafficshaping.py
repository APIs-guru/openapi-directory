from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceTrafficShapingPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits:
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitDown' }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitUp' }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingRequestBody:
    global_bandwidth_limits: Optional[UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'globalBandwidthLimits' }})
    

@dataclass
class UpdateNetworkApplianceTrafficShapingRequest:
    path_params: UpdateNetworkApplianceTrafficShapingPathParams = field(default=None)
    request: Optional[UpdateNetworkApplianceTrafficShapingRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceTrafficShapingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_traffic_shaping_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
