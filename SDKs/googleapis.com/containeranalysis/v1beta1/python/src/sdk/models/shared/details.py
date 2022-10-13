from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attestation


@dataclass_json
@dataclass
class Details:
    attestation: Optional[attestation.Attestation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attestation' }})
    
