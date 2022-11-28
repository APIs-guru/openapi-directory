from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ValidateAttestationOccurrenceResponseResultEnum(str, Enum):
    RESULT_UNSPECIFIED = "RESULT_UNSPECIFIED"
    VERIFIED = "VERIFIED"
    ATTESTATION_NOT_VERIFIABLE = "ATTESTATION_NOT_VERIFIABLE"


@dataclass_json
@dataclass
class ValidateAttestationOccurrenceResponse:
    r"""ValidateAttestationOccurrenceResponse
    Response message for ValidationHelperV1.ValidateAttestationOccurrence.
    """
    
    denial_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denialReason') }})
    result: Optional[ValidateAttestationOccurrenceResponseResultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
