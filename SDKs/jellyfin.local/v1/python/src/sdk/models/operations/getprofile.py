from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetProfilePathParams:
    profile_id: str = field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProfileSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetProfileRequest:
    path_params: GetProfilePathParams = field()
    security: GetProfileSecurity = field()
    

@dataclass
class GetProfileResponse:
    content_type: str = field()
    status_code: int = field()
    device_profile: Optional[shared.DeviceProfile] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
