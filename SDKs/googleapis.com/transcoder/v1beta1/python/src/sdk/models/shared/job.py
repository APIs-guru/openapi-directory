from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import jobconfig
from . import failuredetail
from . import originuri
from . import progress

class JobStateEnum(str, Enum):
    PROCESSING_STATE_UNSPECIFIED = "PROCESSING_STATE_UNSPECIFIED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class Job:
    config: Optional[jobconfig.JobConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    failure_details: Optional[List[failuredetail.FailureDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureDetails' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    input_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputUri' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    origin_uri: Optional[originuri.OriginURI] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originUri' }})
    output_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputUri' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    progress: Optional[progress.Progress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    state: Optional[JobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateId' }})
    ttl_after_completion_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttlAfterCompletionDays' }})
    
