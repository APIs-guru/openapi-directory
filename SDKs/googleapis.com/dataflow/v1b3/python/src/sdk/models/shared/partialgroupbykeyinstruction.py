from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import instructioninput
from . import sideinputinfo


@dataclass_json
@dataclass
class PartialGroupByKeyInstruction:
    input: Optional[instructioninput.InstructionInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    input_element_codec: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputElementCodec' }})
    original_combine_values_input_store_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalCombineValuesInputStoreName' }})
    original_combine_values_step_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalCombineValuesStepName' }})
    side_inputs: Optional[List[sideinputinfo.SideInputInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sideInputs' }})
    value_combining_fn: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueCombiningFn' }})
    
