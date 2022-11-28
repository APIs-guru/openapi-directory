from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSystemInfoSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSystemInfoRequest:
    security: GetSystemInfoSecurity = field()
    

@dataclass
class GetSystemInfoResponse:
    content_type: str = field()
    status_code: int = field()
    system_info: Optional[shared.SystemInfo] = field(default=None)
    
