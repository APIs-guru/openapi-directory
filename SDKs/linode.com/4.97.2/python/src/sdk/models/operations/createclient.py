from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class CreateClientRequestBodyInput:
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    redirect_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_uri') }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    

@dataclass
class CreateClientSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateClientDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateClientRequest:
    security: CreateClientSecurity = field()
    request: Optional[CreateClientRequestBodyInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateClientResponse:
    content_type: str = field()
    status_code: int = field()
    o_auth_client: Optional[shared.OAuthClient] = field(default=None)
    create_client_default_application_json_object: Optional[CreateClientDefaultApplicationJSON] = field(default=None)
    
