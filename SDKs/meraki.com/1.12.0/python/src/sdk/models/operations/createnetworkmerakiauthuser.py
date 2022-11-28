from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkMerakiAuthUserPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum(str, Enum):
    GUEST = "Guest"
    EIGHT_HUNDRED_AND_TWO_1_X = "802.1X"
    CLIENT_VPN = "Client VPN"


@dataclass_json
@dataclass
class CreateNetworkMerakiAuthUserRequestBodyAuthorizations:
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiresAt') }})
    ssid_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssidNumber') }})
    

@dataclass_json
@dataclass
class CreateNetworkMerakiAuthUserRequestBody:
    authorizations: List[CreateNetworkMerakiAuthUserRequestBodyAuthorizations] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizations') }})
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    account_type: Optional[CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountType') }})
    email_password_to_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailPasswordToUser') }})
    

@dataclass
class CreateNetworkMerakiAuthUserRequest:
    path_params: CreateNetworkMerakiAuthUserPathParams = field()
    request: CreateNetworkMerakiAuthUserRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkMerakiAuthUserResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_meraki_auth_user_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
