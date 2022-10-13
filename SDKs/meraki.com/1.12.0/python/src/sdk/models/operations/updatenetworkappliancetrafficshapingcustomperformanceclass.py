from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams:
    custom_performance_class_id: str = field(default=None, metadata={'path_param': { 'field_name': 'customPerformanceClassId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody:
    max_jitter: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxJitter' }})
    max_latency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxLatency' }})
    max_loss_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxLossPercentage' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest:
    path_params: UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams = field(default=None)
    request: Optional[UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_traffic_shaping_custom_performance_class_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
