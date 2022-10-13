from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RebuildLinodeInstancePathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RebuildLinodeInstanceRequestBody:
    authorized_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorized_keys' }})
    authorized_users: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorized_users' }})
    booted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booted' }})
    image: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    root_pass: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'root_pass' }})
    stackscript_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackscript_data' }})
    stackscript_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackscript_id' }})
    

@dataclass
class RebuildLinodeInstanceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RebuildLinodeInstanceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RebuildLinodeInstanceSecurity:
    option1: Optional[RebuildLinodeInstanceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[RebuildLinodeInstanceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class RebuildLinodeInstanceRequest:
    path_params: RebuildLinodeInstancePathParams = field(default=None)
    request: RebuildLinodeInstanceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: RebuildLinodeInstanceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class RebuildLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class RebuildLinodeInstanceResponse:
    content_type: str = field(default=None)
    linode: Optional[shared.Linode] = field(default=None)
    status_code: int = field(default=None)
    rebuild_linode_instance_default_application_json_object: Optional[RebuildLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
