from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkSwitchStormControlPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchStormControlRequestBody:
    broadcast_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('broadcastThreshold') }})
    multicast_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multicastThreshold') }})
    unknown_unicast_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unknownUnicastThreshold') }})
    

@dataclass
class UpdateNetworkSwitchStormControlRequest:
    path_params: UpdateNetworkSwitchStormControlPathParams = field()
    request: Optional[UpdateNetworkSwitchStormControlRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchStormControlResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_switch_storm_control_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
