from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RevokeCertificateRequestReasonEnum(str, Enum):
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
class RevokeCertificateRequest:
    reason: Optional[RevokeCertificateRequestReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
