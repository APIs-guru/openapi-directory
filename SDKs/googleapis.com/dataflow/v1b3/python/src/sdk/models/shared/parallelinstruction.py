from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ParallelInstruction:
    r"""ParallelInstruction
    Describes a particular operation comprising a MapTask.
    """
    
    flatten: Optional[FlattenInstruction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flatten') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    original_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalName') }})
    outputs: Optional[List[InstructionOutput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputs') }})
    par_do: Optional[ParDoInstruction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parDo') }})
    partial_group_by_key: Optional[PartialGroupByKeyInstruction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partialGroupByKey') }})
    read: Optional[ReadInstruction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    system_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemName') }})
    write: Optional[WriteInstruction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('write') }})
    
