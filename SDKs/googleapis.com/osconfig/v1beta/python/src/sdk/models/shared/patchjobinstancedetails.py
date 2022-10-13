from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PatchJobInstanceDetailsStateEnum(str, Enum):
    PATCH_STATE_UNSPECIFIED = "PATCH_STATE_UNSPECIFIED"
    PENDING = "PENDING"
    INACTIVE = "INACTIVE"
    NOTIFIED = "NOTIFIED"
    STARTED = "STARTED"
    DOWNLOADING_PATCHES = "DOWNLOADING_PATCHES"
    APPLYING_PATCHES = "APPLYING_PATCHES"
    REBOOTING = "REBOOTING"
    SUCCEEDED = "SUCCEEDED"
    SUCCEEDED_REBOOT_REQUIRED = "SUCCEEDED_REBOOT_REQUIRED"
    FAILED = "FAILED"
    ACKED = "ACKED"
    TIMED_OUT = "TIMED_OUT"
    RUNNING_PRE_PATCH_STEP = "RUNNING_PRE_PATCH_STEP"
    RUNNING_POST_PATCH_STEP = "RUNNING_POST_PATCH_STEP"
    NO_AGENT_DETECTED = "NO_AGENT_DETECTED"


@dataclass_json
@dataclass
class PatchJobInstanceDetails:
    attempt_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attemptCount' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    instance_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceSystemId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[PatchJobInstanceDetailsStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
