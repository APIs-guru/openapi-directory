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
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateProfileRequest:
    security: CreateProfileSecurity = field()
    request: Optional[CreateProfileRequests] = field(default=None)
    

@dataclass
class CreateProfileResponse:
    content_type: str = field()
    status_code: int = field()
    
