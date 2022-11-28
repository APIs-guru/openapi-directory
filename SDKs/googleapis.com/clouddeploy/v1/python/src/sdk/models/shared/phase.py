from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Phase
    Phase represents a collection of jobs that are logically grouped together for a `Rollout`.
    """
    
    deployment_jobs: Optional[DeploymentJobs] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentJobs') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    state: Optional[PhaseStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
