from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import instructioninput
from . import multioutputinfo
from . import sideinputinfo


@dataclass_json
@dataclass
class ParDoInstruction:
    input: Optional[instructioninput.InstructionInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    multi_output_infos: Optional[List[multioutputinfo.MultiOutputInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiOutputInfos' }})
    num_outputs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numOutputs' }})
    side_inputs: Optional[List[sideinputinfo.SideInputInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sideInputs' }})
    user_fn: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userFn' }})
    
