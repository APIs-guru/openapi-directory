from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetLinodeInstancePathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLinodeInstanceSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetLinodeInstanceRequest:
    path_params: GetLinodeInstancePathParams = field()
    security: GetLinodeInstanceSecurity = field()
    

@dataclass
class GetLinodeInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    linode: Optional[shared.Linode] = field(default=None)
    get_linode_instance_default_application_json_object: Optional[GetLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
