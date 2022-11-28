from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceTrafficShapingPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits:
    r"""UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits
    Global per-client bandwidth limit
    """
    
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingRequestBody:
    global_bandwidth_limits: Optional[UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('globalBandwidthLimits') }})
    

@dataclass
class UpdateNetworkApplianceTrafficShapingRequest:
    path_params: UpdateNetworkApplianceTrafficShapingPathParams = field()
    request: Optional[UpdateNetworkApplianceTrafficShapingRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceTrafficShapingResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_traffic_shaping_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
