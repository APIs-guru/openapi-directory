from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdatePersonalAccessTokenPathParams:
    token_id: int = field(metadata={'path_param': { 'field_name': 'tokenId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePersonalAccessTokenSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdatePersonalAccessTokenDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdatePersonalAccessTokenRequest:
    path_params: UpdatePersonalAccessTokenPathParams = field()
    request: shared.PersonalAccessTokenInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdatePersonalAccessTokenSecurity = field()
    

@dataclass
class UpdatePersonalAccessTokenResponse:
    content_type: str = field()
    status_code: int = field()
    personal_access_token: Optional[shared.PersonalAccessToken] = field(default=None)
    update_personal_access_token_default_application_json_object: Optional[UpdatePersonalAccessTokenDefaultApplicationJSON] = field(default=None)
    
