from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudidentitytoolkitv2finalizemfaphoneresponseinfo


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse:
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idToken' }})
    phone_auth_info: Optional[googlecloudidentitytoolkitv2finalizemfaphoneresponseinfo.GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneAuthInfo' }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshToken' }})
    
