from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import flatteninstruction
from . import instructionoutput
from . import pardoinstruction
from . import partialgroupbykeyinstruction
from . import readinstruction
from . import writeinstruction


@dataclass_json
@dataclass
class ParallelInstruction:
    flatten: Optional[flatteninstruction.FlattenInstruction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flatten' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    original_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalName' }})
    outputs: Optional[List[instructionoutput.InstructionOutput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputs' }})
    par_do: Optional[pardoinstruction.ParDoInstruction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parDo' }})
    partial_group_by_key: Optional[partialgroupbykeyinstruction.PartialGroupByKeyInstruction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partialGroupByKey' }})
    read: Optional[readinstruction.ReadInstruction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'read' }})
    system_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemName' }})
    write: Optional[writeinstruction.WriteInstruction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'write' }})
    
