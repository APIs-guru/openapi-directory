from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EnvelopeSignature:
    keyid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyid' }})
    sig: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sig' }})
    
