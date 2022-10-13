from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deploymentjobs

class PhaseStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    IN_PROGRESS = "IN_PROGRESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    ABORTED = "ABORTED"


@dataclass_json
@dataclass
class Phase:
    deployment_jobs: Optional[deploymentjobs.DeploymentJobs] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentJobs' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    state: Optional[PhaseStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
