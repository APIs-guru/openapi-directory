from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RebootLinodeInstancePathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RebootLinodeInstanceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RebootLinodeInstanceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RebootLinodeInstanceSecurity:
    option1: Optional[RebootLinodeInstanceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[RebootLinodeInstanceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class RebootLinodeInstanceRequest:
    path_params: RebootLinodeInstancePathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: RebootLinodeInstanceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class RebootLinodeInstanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class RebootLinodeInstanceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    reboot_linode_instance_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    reboot_linode_instance_default_application_json_object: Optional[RebootLinodeInstanceDefaultApplicationJSON] = field(default=None)
    
