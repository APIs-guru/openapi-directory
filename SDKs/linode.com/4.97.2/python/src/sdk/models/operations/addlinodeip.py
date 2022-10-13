from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AddLinodeIPPathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddLinodeIPSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class AddLinodeIPSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddLinodeIPSecurity:
    option1: Optional[AddLinodeIPSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AddLinodeIPSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AddLinodeIPRequest:
    path_params: AddLinodeIPPathParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddLinodeIPSecurity = field(default=None)
    

@dataclass_json
@dataclass
class AddLinodeIPDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class AddLinodeIPResponse:
    content_type: str = field(default=None)
    ip_address: Optional[shared.IPAddress] = field(default=None)
    status_code: int = field(default=None)
    add_linode_ip_default_application_json_object: Optional[AddLinodeIPDefaultApplicationJSON] = field(default=None)
    
