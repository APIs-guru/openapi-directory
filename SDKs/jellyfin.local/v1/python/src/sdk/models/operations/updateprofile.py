from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateProfilePathParams:
    profile_id: str = field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateProfileRequests:
    device_profile: Optional[shared.DeviceProfile] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    device_profile1: Optional[shared.DeviceProfile] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    device_profile2: Optional[shared.DeviceProfile] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateProfileSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateProfileRequest:
    path_params: UpdateProfilePathParams = field()
    security: UpdateProfileSecurity = field()
    request: Optional[UpdateProfileRequests] = field(default=None)
    

@dataclass
class UpdateProfileResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
