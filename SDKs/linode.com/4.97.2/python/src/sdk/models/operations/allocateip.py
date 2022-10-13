from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AllocateIPSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class AllocateIPSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AllocateIPSecurity:
    option1: Optional[AllocateIPSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[AllocateIPSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class AllocateIPRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AllocateIPSecurity = field(default=None)
    

@dataclass_json
@dataclass
class AllocateIPDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class AllocateIPResponse:
    content_type: str = field(default=None)
    ip_address: Optional[shared.IPAddress] = field(default=None)
    status_code: int = field(default=None)
    allocate_ip_default_application_json_object: Optional[AllocateIPDefaultApplicationJSON] = field(default=None)
    
