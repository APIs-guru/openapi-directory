from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deployjobrunmetadata

class DeployJobRunFailureCauseEnum(str, Enum):
    FAILURE_CAUSE_UNSPECIFIED = "FAILURE_CAUSE_UNSPECIFIED"
    CLOUD_BUILD_UNAVAILABLE = "CLOUD_BUILD_UNAVAILABLE"
    EXECUTION_FAILED = "EXECUTION_FAILED"
    DEADLINE_EXCEEDED = "DEADLINE_EXCEEDED"


@dataclass_json
@dataclass
class DeployJobRun:
    build: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build' }})
    failure_cause: Optional[DeployJobRunFailureCauseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCause' }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureMessage' }})
    metadata: Optional[deployjobrunmetadata.DeployJobRunMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    
