from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ValidateAttestationOccurrenceResponseResultEnum(str, Enum):
    RESULT_UNSPECIFIED = "RESULT_UNSPECIFIED"
    VERIFIED = "VERIFIED"
    ATTESTATION_NOT_VERIFIABLE = "ATTESTATION_NOT_VERIFIABLE"


@dataclass_json
@dataclass
class ValidateAttestationOccurrenceResponse:
    denial_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'denialReason' }})
    result: Optional[ValidateAttestationOccurrenceResponseResultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
