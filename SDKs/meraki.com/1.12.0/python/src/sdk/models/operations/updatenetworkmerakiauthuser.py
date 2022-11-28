from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkMerakiAuthUserPathParams:
    meraki_auth_user_id: str = field(metadata={'path_param': { 'field_name': 'merakiAuthUserId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkMerakiAuthUserRequestBodyAuthorizations:
    ssid_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssidNumber') }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiresAt') }})
    

@dataclass_json
@dataclass
class UpdateNetworkMerakiAuthUserRequestBody:
    authorizations: Optional[List[UpdateNetworkMerakiAuthUserRequestBodyAuthorizations]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizations') }})
    email_password_to_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailPasswordToUser') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    

@dataclass
class UpdateNetworkMerakiAuthUserRequest:
    path_params: UpdateNetworkMerakiAuthUserPathParams = field()
    request: Optional[UpdateNetworkMerakiAuthUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkMerakiAuthUserResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_meraki_auth_user_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
