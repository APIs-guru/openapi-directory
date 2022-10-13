from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class JobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    DISABLED = "DISABLED"
    IN_PROGRESS = "IN_PROGRESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    ABORTED = "ABORTED"


@dataclass_json
@dataclass
class Job:
    deploy_job: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployJob' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    job_run: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobRun' }})
    state: Optional[JobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    verify_job: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifyJob' }})
    
