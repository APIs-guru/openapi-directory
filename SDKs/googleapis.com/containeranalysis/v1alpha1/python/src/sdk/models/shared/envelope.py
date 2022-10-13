from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import envelopesignature


@dataclass_json
@dataclass
class Envelope:
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    payload_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payloadType' }})
    signatures: Optional[List[envelopesignature.EnvelopeSignature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatures' }})
    
