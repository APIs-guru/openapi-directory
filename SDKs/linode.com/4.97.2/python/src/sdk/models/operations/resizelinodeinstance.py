from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ResizeLinodeInstancePathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ResizeLinodeInstanceRequestBody:
    allow_auto_disk_resize: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_auto_disk_resize' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class ResizeLinodeInstanceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ResizeLinodeInstanceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ResizeLinodeInstanceSecurity:
    option1: Optional[ResizeLinodeInstanceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ResizeLinodeInstanceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ResizeLinodeInstanceRequest:
    path_params: ResizeLinodeInstancePathParams = field(default=None)
    request: ResizeLinodeInstanceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ResizeLinodeInstanceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ResizeLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class ResizeLinodeInstanceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    resize_linode_instance_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    resize_linode_instance_default_application_json_object: Optional[ResizeLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
