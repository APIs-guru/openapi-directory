from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ShutdownLinodeInstancePathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ShutdownLinodeInstanceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ShutdownLinodeInstanceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ShutdownLinodeInstanceSecurity:
    option1: Optional[ShutdownLinodeInstanceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ShutdownLinodeInstanceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ShutdownLinodeInstanceRequest:
    path_params: ShutdownLinodeInstancePathParams = field(default=None)
    security: ShutdownLinodeInstanceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ShutdownLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class ShutdownLinodeInstanceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    shutdown_linode_instance_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    shutdown_linode_instance_default_application_json_object: Optional[ShutdownLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
