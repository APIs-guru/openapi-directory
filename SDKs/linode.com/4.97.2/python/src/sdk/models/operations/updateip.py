from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateIPPathParams:
    address: str = field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateIPSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateIPDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateIPRequest:
    path_params: UpdateIPPathParams = field()
    request: shared.IPAddressInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateIPSecurity = field()
    

@dataclass
class UpdateIPResponse:
    content_type: str = field()
    status_code: int = field()
    ip_address: Optional[shared.IPAddress] = field(default=None)
    update_ip_default_application_json_object: Optional[UpdateIPDefaultApplicationJSON] = field(default=None)
    
