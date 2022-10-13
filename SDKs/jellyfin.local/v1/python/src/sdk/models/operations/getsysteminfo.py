from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSystemInfoSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSystemInfoRequest:
    security: GetSystemInfoSecurity = field(default=None)
    

@dataclass
class GetSystemInfoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    system_info: Optional[shared.SystemInfo] = field(default=None)
    
