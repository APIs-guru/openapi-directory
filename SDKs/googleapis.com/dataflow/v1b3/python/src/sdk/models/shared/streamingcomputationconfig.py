from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import parallelinstruction


@dataclass_json
@dataclass
class StreamingComputationConfig:
    computation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computationId' }})
    instructions: Optional[List[parallelinstruction.ParallelInstruction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instructions' }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageName' }})
    system_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemName' }})
    transform_user_name_to_state_family: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformUserNameToStateFamily' }})
    
