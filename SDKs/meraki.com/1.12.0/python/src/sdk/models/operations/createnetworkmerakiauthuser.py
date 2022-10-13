from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkMerakiAuthUserPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum(str, Enum):
    GUEST = "Guest"
    EIGHT_HUNDRED_AND_TWO_1_X = "802.1X"
    CLIENT_VPN = "Client VPN"


@dataclass_json
@dataclass
class CreateNetworkMerakiAuthUserRequestBodyAuthorizations:
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresAt' }})
    ssid_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssidNumber' }})
    

@dataclass_json
@dataclass
class CreateNetworkMerakiAuthUserRequestBody:
    account_type: Optional[CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountType' }})
    authorizations: List[CreateNetworkMerakiAuthUserRequestBodyAuthorizations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizations' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    email_password_to_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailPasswordToUser' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    

@dataclass
class CreateNetworkMerakiAuthUserRequest:
    path_params: CreateNetworkMerakiAuthUserPathParams = field(default=None)
    request: CreateNetworkMerakiAuthUserRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkMerakiAuthUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_meraki_auth_user_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
