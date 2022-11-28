from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DeployJobRunFailureCauseEnum(str, Enum):
    FAILURE_CAUSE_UNSPECIFIED = "FAILURE_CAUSE_UNSPECIFIED"
    CLOUD_BUILD_UNAVAILABLE = "CLOUD_BUILD_UNAVAILABLE"
    EXECUTION_FAILED = "EXECUTION_FAILED"
    DEADLINE_EXCEEDED = "DEADLINE_EXCEEDED"


@dataclass_json
@dataclass
class DeployJobRun:
    r"""DeployJobRun
    DeployJobRun contains information specific to a deploy `JobRun`.
    """
    
    build: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build') }})
    failure_cause: Optional[DeployJobRunFailureCauseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCause') }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureMessage') }})
    metadata: Optional[DeployJobRunMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
