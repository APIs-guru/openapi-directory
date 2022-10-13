from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudidentitytoolkitv2finalizemfaphonerequestinfo


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idToken' }})
    phone_verification_info: Optional[googlecloudidentitytoolkitv2finalizemfaphonerequestinfo.GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneVerificationInfo' }})
    tenant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenantId' }})
    
