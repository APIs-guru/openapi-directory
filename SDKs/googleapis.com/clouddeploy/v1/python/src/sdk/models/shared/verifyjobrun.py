from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class VerifyJobRunFailureCauseEnum(str, Enum):
    FAILURE_CAUSE_UNSPECIFIED = "FAILURE_CAUSE_UNSPECIFIED"
    CLOUD_BUILD_UNAVAILABLE = "CLOUD_BUILD_UNAVAILABLE"
    EXECUTION_FAILED = "EXECUTION_FAILED"
    DEADLINE_EXCEEDED = "DEADLINE_EXCEEDED"
    VERIFICATION_CONFIG_NOT_FOUND = "VERIFICATION_CONFIG_NOT_FOUND"


@dataclass_json
@dataclass
class VerifyJobRun:
    artifact_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactUri' }})
    build: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build' }})
    event_log_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventLogPath' }})
    failure_cause: Optional[VerifyJobRunFailureCauseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCause' }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureMessage' }})
    
