from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class MutateLinodeInstancePathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class MutateLinodeInstanceRequestBody:
    allow_auto_disk_resize: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_auto_disk_resize' }})
    

@dataclass
class MutateLinodeInstanceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class MutateLinodeInstanceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MutateLinodeInstanceSecurity:
    option1: Optional[MutateLinodeInstanceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[MutateLinodeInstanceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class MutateLinodeInstanceRequest:
    path_params: MutateLinodeInstancePathParams = field(default=None)
    request: Optional[MutateLinodeInstanceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: MutateLinodeInstanceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class MutateLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class MutateLinodeInstanceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    mutate_linode_instance_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    mutate_linode_instance_default_application_json_object: Optional[MutateLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
