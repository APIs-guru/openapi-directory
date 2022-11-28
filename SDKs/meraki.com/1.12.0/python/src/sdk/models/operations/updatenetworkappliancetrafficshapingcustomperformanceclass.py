from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams:
    custom_performance_class_id: str = field(metadata={'path_param': { 'field_name': 'customPerformanceClassId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody:
    max_jitter: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxJitter') }})
    max_latency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLatency') }})
    max_loss_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLossPercentage') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest:
    path_params: UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams = field()
    request: Optional[UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_traffic_shaping_custom_performance_class_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
