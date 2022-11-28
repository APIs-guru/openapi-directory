from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ValidateAttestationOccurrenceRequest:
    r"""ValidateAttestationOccurrenceRequest
    Request message for ValidationHelperV1.ValidateAttestationOccurrence.
    """
    
    attestation: Optional[AttestationOccurrence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestation') }})
    occurrence_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurrenceNote') }})
    occurrence_resource_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurrenceResourceUri') }})
    
