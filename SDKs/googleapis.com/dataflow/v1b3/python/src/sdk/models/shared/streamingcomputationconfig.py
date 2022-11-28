from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StreamingComputationConfig:
    r"""StreamingComputationConfig
    Configuration information for a single streaming computation.
    """
    
    computation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computationId') }})
    instructions: Optional[List[ParallelInstruction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instructions') }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageName') }})
    system_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemName') }})
    transform_user_name_to_state_family: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformUserNameToStateFamily') }})
    
