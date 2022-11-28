from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FlattenInstruction:
    r"""FlattenInstruction
    An instruction that copies its inputs (zero or more) to its (single) output.
    """
    
    inputs: Optional[List[InstructionInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputs') }})
    
