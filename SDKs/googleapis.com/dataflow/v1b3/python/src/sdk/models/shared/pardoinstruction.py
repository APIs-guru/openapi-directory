from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ParDoInstruction:
    r"""ParDoInstruction
    An instruction that does a ParDo operation. Takes one main input and zero or more side inputs, and produces zero or more outputs. Runs user code.
    """
    
    input: Optional[InstructionInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    multi_output_infos: Optional[List[MultiOutputInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiOutputInfos') }})
    num_outputs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numOutputs') }})
    side_inputs: Optional[List[SideInputInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sideInputs') }})
    user_fn: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userFn') }})
    
