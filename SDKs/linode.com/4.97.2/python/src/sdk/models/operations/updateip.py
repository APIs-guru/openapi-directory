from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateIPPathParams:
    address: str = field(default=None, metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateIPSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateIPSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateIPSecurity:
    option1: Optional[UpdateIPSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateIPSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateIPRequest:
    path_params: UpdateIPPathParams = field(default=None)
    request: shared.IPAddress = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateIPSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateIPDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateIPResponse:
    content_type: str = field(default=None)
    ip_address: Optional[shared.IPAddress] = field(default=None)
    status_code: int = field(default=None)
    update_ip_default_application_json_object: Optional[UpdateIPDefaultApplicationJSON] = field(default=None)
    
