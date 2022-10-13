from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDefaultProfileSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDefaultProfileRequest:
    security: GetDefaultProfileSecurity = field(default=None)
    

@dataclass
class GetDefaultProfileResponse:
    content_type: str = field(default=None)
    device_profile: Optional[shared.DeviceProfile] = field(default=None)
    status_code: int = field(default=None)
    
