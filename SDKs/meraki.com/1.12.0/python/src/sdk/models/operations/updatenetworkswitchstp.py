from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkSwitchStpPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchStpRequestBodyStpBridgePriority:
    stp_priority: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stpPriority') }})
    stacks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stacks') }})
    switch_profiles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switchProfiles') }})
    switches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switches') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchStpRequestBody:
    rstp_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rstpEnabled') }})
    stp_bridge_priority: Optional[List[UpdateNetworkSwitchStpRequestBodyStpBridgePriority]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stpBridgePriority') }})
    

@dataclass
class UpdateNetworkSwitchStpRequest:
    path_params: UpdateNetworkSwitchStpPathParams = field()
    request: Optional[UpdateNetworkSwitchStpRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchStpResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_switch_stp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
