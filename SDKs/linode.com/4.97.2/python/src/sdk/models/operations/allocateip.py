from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AllocateIPSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class AllocateIPDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class AllocateIPRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: AllocateIPSecurity = field()
    

@dataclass
class AllocateIPResponse:
    content_type: str = field()
    status_code: int = field()
    ip_address: Optional[shared.IPAddress] = field(default=None)
    allocate_ip_default_application_json_object: Optional[AllocateIPDefaultApplicationJSON] = field(default=None)
    
