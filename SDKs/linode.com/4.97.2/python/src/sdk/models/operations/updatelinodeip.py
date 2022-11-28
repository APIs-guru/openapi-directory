from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateLinodeIPPathParams:
    address: str = field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLinodeIPSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateLinodeIPDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateLinodeIPRequest:
    path_params: UpdateLinodeIPPathParams = field()
    security: UpdateLinodeIPSecurity = field()
    request: Optional[shared.IPAddressInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateLinodeIPResponse:
    content_type: str = field()
    status_code: int = field()
    ip_address: Optional[shared.IPAddress] = field(default=None)
    update_linode_ip_default_application_json_object: Optional[UpdateLinodeIPDefaultApplicationJSON] = field(default=None)
    
