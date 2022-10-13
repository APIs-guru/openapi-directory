from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class BootLinodeInstancePathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class BootLinodeInstanceRequestBody:
    config_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config_id' }})
    

@dataclass
class BootLinodeInstanceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class BootLinodeInstanceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BootLinodeInstanceSecurity:
    option1: Optional[BootLinodeInstanceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[BootLinodeInstanceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class BootLinodeInstanceRequest:
    path_params: BootLinodeInstancePathParams = field(default=None)
    request: Optional[BootLinodeInstanceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: BootLinodeInstanceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class BootLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class BootLinodeInstanceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    boot_linode_instance_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    boot_linode_instance_default_application_json_object: Optional[BootLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
