from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrunv1condition
from . import taskattemptresult


@dataclass_json
@dataclass
class TaskStatus:
    completion_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completionTime' }})
    conditions: Optional[List[googlecloudrunv1condition.GoogleCloudRunV1Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    last_attempt_result: Optional[taskattemptresult.TaskAttemptResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastAttemptResult' }})
    log_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logUri' }})
    observed_generation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'observedGeneration' }})
    retried: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retried' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
