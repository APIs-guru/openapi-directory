from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    EXPIRED = "EXPIRED"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaCertificate:
    r"""GoogleCloudIntegrationsV1alphaCertificate
    The certificate definition
    """
    
    certificate_status: Optional[GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateStatus') }})
    credential_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentialId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    raw_certificate: Optional[GoogleCloudIntegrationsV1alphaClientCertificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawCertificate') }})
    requestor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestorId') }})
    valid_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validEndTime') }})
    valid_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validStartTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaCertificateInput:
    r"""GoogleCloudIntegrationsV1alphaCertificateInput
    The certificate definition
    """
    
    certificate_status: Optional[GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateStatus') }})
    credential_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentialId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    raw_certificate: Optional[GoogleCloudIntegrationsV1alphaClientCertificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawCertificate') }})
    requestor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestorId') }})
    
