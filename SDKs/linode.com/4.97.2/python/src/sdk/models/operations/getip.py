from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetIPPathParams:
    address: str = field(default=None, metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIPSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetIPSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetIPSecurity:
    option1: Optional[GetIPSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetIPSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetIPRequest:
    path_params: GetIPPathParams = field(default=None)
    security: GetIPSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetIPDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetIPResponse:
    content_type: str = field(default=None)
    ip_address: Optional[shared.IPAddress] = field(default=None)
    status_code: int = field(default=None)
    get_ip_default_application_json_object: Optional[GetIPDefaultApplicationJSON] = field(default=None)
    
