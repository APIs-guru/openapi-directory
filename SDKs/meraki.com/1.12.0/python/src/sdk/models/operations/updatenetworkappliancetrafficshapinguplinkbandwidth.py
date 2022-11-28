from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular:
    r"""UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular
    The bandwidth settings for the 'cellular' uplink
    """
    
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1:
    r"""UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1
    The bandwidth settings for the 'wan1' uplink
    """
    
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2:
    r"""UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2
    The bandwidth settings for the 'wan2' uplink
    """
    
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits:
    r"""UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits
    A mapping of uplinks to their bandwidth settings (be sure to check which uplinks are supported for your network)
    """
    
    cellular: Optional[UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellular') }})
    wan1: Optional[UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wan1') }})
    wan2: Optional[UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wan2') }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody:
    bandwidth_limits: Optional[UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthLimits') }})
    

@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest:
    path_params: UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams = field()
    request: Optional[UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_traffic_shaping_uplink_bandwidth_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
