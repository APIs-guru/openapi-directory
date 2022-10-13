from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudidentitytoolkitv2startmfaphonerequestinfo


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitV2StartMfaSignInRequest:
    mfa_enrollment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mfaEnrollmentId' }})
    mfa_pending_credential: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mfaPendingCredential' }})
    phone_sign_in_info: Optional[googlecloudidentitytoolkitv2startmfaphonerequestinfo.GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneSignInInfo' }})
    tenant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenantId' }})
    
