from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrunv1condition
from . import executionreference


@dataclass_json
@dataclass
class JobStatus:
    conditions: Optional[List[googlecloudrunv1condition.GoogleCloudRunV1Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    execution_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionCount' }})
    latest_created_execution: Optional[executionreference.ExecutionReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestCreatedExecution' }})
    observed_generation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'observedGeneration' }})
    
