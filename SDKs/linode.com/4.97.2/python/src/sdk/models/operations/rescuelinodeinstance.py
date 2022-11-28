from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RescueLinodeInstancePathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RescueLinodeInstanceRequestBody:
    devices: Optional[shared.RescueDevices] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    

@dataclass
class RescueLinodeInstanceSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class RescueLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class RescueLinodeInstanceRequest:
    path_params: RescueLinodeInstancePathParams = field()
    security: RescueLinodeInstanceSecurity = field()
    request: Optional[RescueLinodeInstanceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RescueLinodeInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    rescue_linode_instance_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    rescue_linode_instance_default_application_json_object: Optional[RescueLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
