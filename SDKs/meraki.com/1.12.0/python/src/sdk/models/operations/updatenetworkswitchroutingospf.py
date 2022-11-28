from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkSwitchRoutingOspfPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum(str, Enum):
    NORMAL = "normal"
    STUB = "stub"
    NSSA = "nssa"


@dataclass_json
@dataclass
class UpdateNetworkSwitchRoutingOspfRequestBodyAreas:
    area_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('areaId') }})
    area_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('areaName') }})
    area_type: UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('areaType') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey:
    r"""UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey
    MD5 authentication credentials. This param is only relevant if md5AuthenticationEnabled is true
    """
    
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    passphrase: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passphrase') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchRoutingOspfRequestBody:
    areas: Optional[List[UpdateNetworkSwitchRoutingOspfRequestBodyAreas]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('areas') }})
    dead_timer_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deadTimerInSeconds') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    hello_timer_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helloTimerInSeconds') }})
    md5_authentication_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('md5AuthenticationEnabled') }})
    md5_authentication_key: Optional[UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('md5AuthenticationKey') }})
    

@dataclass
class UpdateNetworkSwitchRoutingOspfRequest:
    path_params: UpdateNetworkSwitchRoutingOspfPathParams = field()
    request: Optional[UpdateNetworkSwitchRoutingOspfRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchRoutingOspfResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_switch_routing_ospf_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
