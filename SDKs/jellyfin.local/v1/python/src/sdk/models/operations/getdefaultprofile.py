from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDefaultProfileSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDefaultProfileRequest:
    security: GetDefaultProfileSecurity = field()
    

@dataclass
class GetDefaultProfileResponse:
    content_type: str = field()
    status_code: int = field()
    device_profile: Optional[shared.DeviceProfile] = field(default=None)
    
