from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudidentitytoolkitv2startmfaphonerequestinfo


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest:
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idToken' }})
    phone_enrollment_info: Optional[googlecloudidentitytoolkitv2startmfaphonerequestinfo.GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneEnrollmentInfo' }})
    tenant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenantId' }})
    
