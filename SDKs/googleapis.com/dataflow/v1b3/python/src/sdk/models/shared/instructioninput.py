from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InstructionInput:
    output_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputNum' }})
    producer_instruction_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'producerInstructionIndex' }})
    
