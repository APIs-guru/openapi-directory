from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateClientPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateClientSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateClientDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateClientRequest:
    path_params: UpdateClientPathParams = field()
    security: UpdateClientSecurity = field()
    request: Optional[shared.OAuthClientInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateClientResponse:
    content_type: str = field()
    status_code: int = field()
    o_auth_client: Optional[shared.OAuthClient] = field(default=None)
    update_client_default_application_json_object: Optional[UpdateClientDefaultApplicationJSON] = field(default=None)
    
