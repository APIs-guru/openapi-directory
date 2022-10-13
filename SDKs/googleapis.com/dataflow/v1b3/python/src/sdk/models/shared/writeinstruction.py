from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import instructioninput
from . import sink


@dataclass_json
@dataclass
class WriteInstruction:
    input: Optional[instructioninput.InstructionInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    sink: Optional[sink.Sink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sink' }})
    
