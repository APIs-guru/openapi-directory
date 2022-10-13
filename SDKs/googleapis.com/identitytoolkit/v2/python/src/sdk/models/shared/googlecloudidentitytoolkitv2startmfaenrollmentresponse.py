from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudidentitytoolkitv2startmfaphoneresponseinfo


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse:
    phone_session_info: Optional[googlecloudidentitytoolkitv2startmfaphoneresponseinfo.GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneSessionInfo' }})
    
