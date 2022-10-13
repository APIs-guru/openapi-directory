from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrunv1condition


@dataclass_json
@dataclass
class ExecutionStatus:
    cancelled_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelledCount' }})
    completion_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completionTime' }})
    conditions: Optional[List[googlecloudrunv1condition.GoogleCloudRunV1Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    failed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedCount' }})
    log_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logUri' }})
    observed_generation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'observedGeneration' }})
    retried_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retriedCount' }})
    running_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runningCount' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    succeeded_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'succeededCount' }})
    
