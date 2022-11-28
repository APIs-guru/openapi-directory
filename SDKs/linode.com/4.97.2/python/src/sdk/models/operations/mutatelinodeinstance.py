from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class MutateLinodeInstancePathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class MutateLinodeInstanceRequestBody:
    allow_auto_disk_resize: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_auto_disk_resize') }})
    

@dataclass
class MutateLinodeInstanceSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class MutateLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class MutateLinodeInstanceRequest:
    path_params: MutateLinodeInstancePathParams = field()
    security: MutateLinodeInstanceSecurity = field()
    request: Optional[MutateLinodeInstanceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MutateLinodeInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    mutate_linode_instance_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    mutate_linode_instance_default_application_json_object: Optional[MutateLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
