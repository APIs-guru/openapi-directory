from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateLinodeInstancePathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLinodeInstanceSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateLinodeInstanceRequest:
    path_params: UpdateLinodeInstancePathParams = field()
    request: shared.LinodeInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateLinodeInstanceSecurity = field()
    

@dataclass
class UpdateLinodeInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    linode: Optional[shared.Linode] = field(default=None)
    update_linode_instance_default_application_json_object: Optional[UpdateLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
