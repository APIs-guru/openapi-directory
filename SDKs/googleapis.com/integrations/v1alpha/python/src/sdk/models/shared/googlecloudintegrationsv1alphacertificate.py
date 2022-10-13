from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphaclientcertificate

class GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    EXPIRED = "EXPIRED"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaCertificate:
    certificate_status: Optional[GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateStatus' }})
    credential_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentialId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    raw_certificate: Optional[googlecloudintegrationsv1alphaclientcertificate.GoogleCloudIntegrationsV1alphaClientCertificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawCertificate' }})
    requestor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestorId' }})
    valid_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validEndTime' }})
    valid_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validStartTime' }})
    
