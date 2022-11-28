from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CertificateAttributesValidationStateEnum(str, Enum):
    CERTIFICATE_VALIDATION_STATE_UNSPECIFIED = "CERTIFICATE_VALIDATION_STATE_UNSPECIFIED"
    VALIDATION_SUCCESSFUL = "VALIDATION_SUCCESSFUL"
    VALIDATION_FAILED = "VALIDATION_FAILED"


@dataclass_json
@dataclass
class CertificateAttributes:
    r"""CertificateAttributes
    Stores information about a certificate.
    """
    
    certificate_template: Optional[CertificateTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateTemplate') }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    thumbprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbprint') }})
    validation_state: Optional[CertificateAttributesValidationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationState') }})
    validity_expiration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validityExpirationTime') }})
    validity_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validityStartTime') }})
    
