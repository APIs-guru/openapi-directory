from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ResizeLinodeInstancePathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ResizeLinodeInstanceRequestBody:
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    allow_auto_disk_resize: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_auto_disk_resize') }})
    

@dataclass
class ResizeLinodeInstanceSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class ResizeLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class ResizeLinodeInstanceRequest:
    path_params: ResizeLinodeInstancePathParams = field()
    request: ResizeLinodeInstanceRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: ResizeLinodeInstanceSecurity = field()
    

@dataclass
class ResizeLinodeInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    resize_linode_instance_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    resize_linode_instance_default_application_json_object: Optional[ResizeLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
