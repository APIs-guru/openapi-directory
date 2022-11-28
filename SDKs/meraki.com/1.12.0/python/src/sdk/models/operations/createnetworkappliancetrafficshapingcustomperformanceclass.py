from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    max_jitter: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxJitter') }})
    max_latency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLatency') }})
    max_loss_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLossPercentage') }})
    

@dataclass
class CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest:
    path_params: CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams = field()
    request: CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_appliance_traffic_shaping_custom_performance_class_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
