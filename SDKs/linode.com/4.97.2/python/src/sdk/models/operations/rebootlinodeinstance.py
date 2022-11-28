from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RebootLinodeInstancePathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RebootLinodeInstanceSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class RebootLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class RebootLinodeInstanceRequest:
    path_params: RebootLinodeInstancePathParams = field()
    security: RebootLinodeInstanceSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RebootLinodeInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    reboot_linode_instance_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    reboot_linode_instance_default_application_json_object: Optional[RebootLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
