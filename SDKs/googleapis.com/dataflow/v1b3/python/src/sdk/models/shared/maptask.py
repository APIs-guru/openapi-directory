from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import parallelinstruction


@dataclass_json
@dataclass
class MapTask:
    counter_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'counterPrefix' }})
    instructions: Optional[List[parallelinstruction.ParallelInstruction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instructions' }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageName' }})
    system_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemName' }})
    
