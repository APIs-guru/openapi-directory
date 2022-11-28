from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""PatchJobInstanceDetails
    Patch details for a VM instance. For more information about reviewing VM instance details, see [Listing all VM instance details for a specific patch job](https://cloud.google.com/compute/docs/os-patch-management/manage-patch-jobs#list-instance-details).
    """
    
    attempt_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attemptCount') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    instance_system_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceSystemId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[PatchJobInstanceDetailsStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
