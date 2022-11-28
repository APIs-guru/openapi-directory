from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PartialGroupByKeyInstruction:
    r"""PartialGroupByKeyInstruction
    An instruction that does a partial group-by-key. One input and one output.
    """
    
    input: Optional[InstructionInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    input_element_codec: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputElementCodec') }})
    original_combine_values_input_store_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalCombineValuesInputStoreName') }})
    original_combine_values_step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalCombineValuesStepName') }})
    side_inputs: Optional[List[SideInputInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sideInputs') }})
    value_combining_fn: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueCombiningFn') }})
    
