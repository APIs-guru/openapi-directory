from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateProfileRequests:
    device_profile: Optional[shared.DeviceProfile] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    device_profile1: Optional[shared.DeviceProfile] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    device_profile2: Optional[shared.DeviceProfile] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class CreateProfileSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateProfileRequest:
    request: Optional[CreateProfileRequests] = field(default=None)
    security: CreateProfileSecurity = field(default=None)
    

@dataclass
class CreateProfileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
