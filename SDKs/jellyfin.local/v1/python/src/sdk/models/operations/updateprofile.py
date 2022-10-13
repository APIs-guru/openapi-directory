from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateProfilePathParams:
    profile_id: str = field(default=None, metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateProfileRequests:
    device_profile: Optional[shared.DeviceProfile] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    device_profile1: Optional[shared.DeviceProfile] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    device_profile2: Optional[shared.DeviceProfile] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateProfileSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateProfileRequest:
    path_params: UpdateProfilePathParams = field(default=None)
    request: Optional[UpdateProfileRequests] = field(default=None)
    security: UpdateProfileSecurity = field(default=None)
    

@dataclass
class UpdateProfileResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
