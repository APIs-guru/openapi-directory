from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InstructionInput:
    r"""InstructionInput
    An input of an instruction, as a reference to an output of a producer instruction.
    """
    
    output_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputNum') }})
    producer_instruction_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('producerInstructionIndex') }})
    
