from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instructioninput


@dataclass_json
@dataclass
class FlattenInstruction:
    inputs: Optional[List[instructioninput.InstructionInput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputs' }})
    
