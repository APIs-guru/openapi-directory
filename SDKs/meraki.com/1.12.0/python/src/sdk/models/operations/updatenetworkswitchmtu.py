from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkSwitchMtuPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchMtuRequestBodyOverrides:
    mtu_size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mtuSize') }})
    switch_profiles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switchProfiles') }})
    switches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switches') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchMtuRequestBody:
    default_mtu_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultMtuSize') }})
    overrides: Optional[List[UpdateNetworkSwitchMtuRequestBodyOverrides]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrides') }})
    

@dataclass
class UpdateNetworkSwitchMtuRequest:
    path_params: UpdateNetworkSwitchMtuPathParams = field()
    request: Optional[UpdateNetworkSwitchMtuRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchMtuResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_switch_mtu_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
