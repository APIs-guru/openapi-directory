from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WriteInstruction:
    r"""WriteInstruction
    An instruction that writes records. Takes one input, produces no outputs.
    """
    
    input: Optional[InstructionInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    sink: Optional[Sink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sink') }})
    
