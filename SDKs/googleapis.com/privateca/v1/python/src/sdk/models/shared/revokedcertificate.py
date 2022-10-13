from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RevokedCertificateRevocationReasonEnum(str, Enum):
    REVOCATION_REASON_UNSPECIFIED = "REVOCATION_REASON_UNSPECIFIED"
    KEY_COMPROMISE = "KEY_COMPROMISE"
    CERTIFICATE_AUTHORITY_COMPROMISE = "CERTIFICATE_AUTHORITY_COMPROMISE"
    AFFILIATION_CHANGED = "AFFILIATION_CHANGED"
    SUPERSEDED = "SUPERSEDED"
    CESSATION_OF_OPERATION = "CESSATION_OF_OPERATION"
    CERTIFICATE_HOLD = "CERTIFICATE_HOLD"
    PRIVILEGE_WITHDRAWN = "PRIVILEGE_WITHDRAWN"
    ATTRIBUTE_AUTHORITY_COMPROMISE = "ATTRIBUTE_AUTHORITY_COMPROMISE"


@dataclass_json
@dataclass
class RevokedCertificate:
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    hex_serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hexSerialNumber' }})
    revocation_reason: Optional[RevokedCertificateRevocationReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revocationReason' }})
    
