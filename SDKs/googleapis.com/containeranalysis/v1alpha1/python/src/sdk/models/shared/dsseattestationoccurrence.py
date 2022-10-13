from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import envelope
from . import intotostatement


@dataclass_json
@dataclass
class DsseAttestationOccurrence:
    envelope: Optional[envelope.Envelope] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envelope' }})
    statement: Optional[intotostatement.InTotoStatement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statement' }})
    
