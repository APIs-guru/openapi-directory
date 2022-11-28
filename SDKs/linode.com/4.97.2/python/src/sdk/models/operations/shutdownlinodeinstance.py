from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ShutdownLinodeInstancePathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ShutdownLinodeInstanceSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class ShutdownLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class ShutdownLinodeInstanceRequest:
    path_params: ShutdownLinodeInstancePathParams = field()
    security: ShutdownLinodeInstanceSecurity = field()
    

@dataclass
class ShutdownLinodeInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    shutdown_linode_instance_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    shutdown_linode_instance_default_application_json_object: Optional[ShutdownLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
