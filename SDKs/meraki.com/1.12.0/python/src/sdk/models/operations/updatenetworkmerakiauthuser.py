from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkMerakiAuthUserPathParams:
    meraki_auth_user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'merakiAuthUserId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkMerakiAuthUserRequestBodyAuthorizations:
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresAt' }})
    ssid_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssidNumber' }})
    

@dataclass_json
@dataclass
class UpdateNetworkMerakiAuthUserRequestBody:
    authorizations: Optional[List[UpdateNetworkMerakiAuthUserRequestBodyAuthorizations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizations' }})
    email_password_to_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailPasswordToUser' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    

@dataclass
class UpdateNetworkMerakiAuthUserRequest:
    path_params: UpdateNetworkMerakiAuthUserPathParams = field(default=None)
    request: Optional[UpdateNetworkMerakiAuthUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkMerakiAuthUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_meraki_auth_user_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
