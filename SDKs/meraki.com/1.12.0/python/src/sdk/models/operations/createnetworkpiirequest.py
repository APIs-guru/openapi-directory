from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkPiiRequestPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class CreateNetworkPiiRequestRequestBodyTypeEnum(str, Enum):
    DELETE = "delete"
    RESTRICT_PROCESSING = "restrict processing"


@dataclass_json
@dataclass
class CreateNetworkPiiRequestRequestBody:
    datasets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasets') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    mac: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac') }})
    sm_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smDeviceId') }})
    sm_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smUserId') }})
    type: Optional[CreateNetworkPiiRequestRequestBodyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass
class CreateNetworkPiiRequestRequest:
    path_params: CreateNetworkPiiRequestPathParams = field()
    request: Optional[CreateNetworkPiiRequestRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkPiiRequestResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_pii_request_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
