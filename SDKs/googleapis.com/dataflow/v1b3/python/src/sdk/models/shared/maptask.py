from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MapTask:
    r"""MapTask
    MapTask consists of an ordered set of instructions, each of which describes one particular low-level operation for the worker to perform in order to accomplish the MapTask's WorkItem. Each instruction must appear in the list before any instructions which depends on its output.
    """
    
    counter_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counterPrefix') }})
    instructions: Optional[List[ParallelInstruction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instructions') }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageName') }})
    system_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemName') }})
    
