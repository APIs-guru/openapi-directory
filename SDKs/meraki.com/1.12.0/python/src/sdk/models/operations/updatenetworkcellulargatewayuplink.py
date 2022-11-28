from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkCellularGatewayUplinkPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits:
    r"""UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits
    The bandwidth settings for the 'cellular' uplink
    """
    
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    

@dataclass_json
@dataclass
class UpdateNetworkCellularGatewayUplinkRequestBody:
    bandwidth_limits: Optional[UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthLimits') }})
    

@dataclass
class UpdateNetworkCellularGatewayUplinkRequest:
    path_params: UpdateNetworkCellularGatewayUplinkPathParams = field()
    request: Optional[UpdateNetworkCellularGatewayUplinkRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkCellularGatewayUplinkResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_cellular_gateway_uplink_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
