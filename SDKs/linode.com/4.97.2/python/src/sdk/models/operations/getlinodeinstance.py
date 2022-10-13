from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLinodeInstancePathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLinodeInstanceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLinodeInstanceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLinodeInstanceSecurity:
    option1: Optional[GetLinodeInstanceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLinodeInstanceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLinodeInstanceRequest:
    path_params: GetLinodeInstancePathParams = field(default=None)
    security: GetLinodeInstanceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetLinodeInstanceResponse:
    content_type: str = field(default=None)
    linode: Optional[shared.Linode] = field(default=None)
    status_code: int = field(default=None)
    get_linode_instance_default_application_json_object: Optional[GetLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
