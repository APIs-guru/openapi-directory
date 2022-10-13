from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jobcondition
from . import instancestatus


@dataclass_json
@dataclass
class JobStatus:
    active: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    completion_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completionTime' }})
    conditions: Optional[List[jobcondition.JobCondition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    failed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failed' }})
    image_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageDigest' }})
    instances: Optional[List[instancestatus.InstanceStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instances' }})
    observed_generation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'observedGeneration' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    succeeded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'succeeded' }})
    
