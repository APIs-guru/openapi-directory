from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateLinodeInstancePathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLinodeInstanceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateLinodeInstanceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateLinodeInstanceSecurity:
    option1: Optional[UpdateLinodeInstanceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateLinodeInstanceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateLinodeInstanceRequest:
    path_params: UpdateLinodeInstancePathParams = field(default=None)
    request: shared.Linode = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateLinodeInstanceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateLinodeInstanceResponse:
    content_type: str = field(default=None)
    linode: Optional[shared.Linode] = field(default=None)
    status_code: int = field(default=None)
    update_linode_instance_default_application_json_object: Optional[UpdateLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
