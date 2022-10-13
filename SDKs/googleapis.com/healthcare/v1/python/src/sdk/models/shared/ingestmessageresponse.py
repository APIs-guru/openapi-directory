from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import message


@dataclass_json
@dataclass
class IngestMessageResponse:
    hl7_ack: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hl7Ack' }})
    message: Optional[message.Message] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
