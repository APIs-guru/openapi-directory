from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkSnmpPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkSnmpRequestBodyAccessEnum(str, Enum):
    NONE = "none"
    COMMUNITY = "community"
    USERS = "users"


@dataclass_json
@dataclass
class UpdateNetworkSnmpRequestBodyUsers:
    passphrase: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('passphrase') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSnmpRequestBody:
    access: Optional[UpdateNetworkSnmpRequestBodyAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    community_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('communityString') }})
    users: Optional[List[UpdateNetworkSnmpRequestBodyUsers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    

@dataclass
class UpdateNetworkSnmpRequest:
    path_params: UpdateNetworkSnmpPathParams = field()
    request: Optional[UpdateNetworkSnmpRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSnmpResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_snmp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
