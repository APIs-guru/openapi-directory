from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attestationoccurrence


@dataclass_json
@dataclass
class ValidateAttestationOccurrenceRequest:
    attestation: Optional[attestationoccurrence.AttestationOccurrence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attestation' }})
    occurrence_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'occurrenceNote' }})
    occurrence_resource_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'occurrenceResourceUri' }})
    
