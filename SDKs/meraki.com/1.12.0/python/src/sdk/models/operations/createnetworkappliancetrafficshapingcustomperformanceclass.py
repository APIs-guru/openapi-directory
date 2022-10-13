from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody:
    max_jitter: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxJitter' }})
    max_latency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxLatency' }})
    max_loss_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxLossPercentage' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest:
    path_params: CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams = field(default=None)
    request: CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_appliance_traffic_shaping_custom_performance_class_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
