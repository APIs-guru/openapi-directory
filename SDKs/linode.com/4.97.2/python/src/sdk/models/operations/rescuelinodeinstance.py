from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RescueLinodeInstancePathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RescueLinodeInstanceRequestBody:
    devices: Optional[shared.RescueDevices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    

@dataclass
class RescueLinodeInstanceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RescueLinodeInstanceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RescueLinodeInstanceSecurity:
    option1: Optional[RescueLinodeInstanceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[RescueLinodeInstanceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class RescueLinodeInstanceRequest:
    path_params: RescueLinodeInstancePathParams = field(default=None)
    request: Optional[RescueLinodeInstanceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: RescueLinodeInstanceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class RescueLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class RescueLinodeInstanceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    rescue_linode_instance_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    rescue_linode_instance_default_application_json_object: Optional[RescueLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
