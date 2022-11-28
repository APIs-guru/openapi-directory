from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class QueuedResourceStateStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACCEPTED = "ACCEPTED"
    PROVISIONING = "PROVISIONING"
    FAILED = "FAILED"
    DELETING = "DELETING"
    ACTIVE = "ACTIVE"
    SUSPENDING = "SUSPENDING"
    SUSPENDED = "SUSPENDED"


@dataclass_json
@dataclass
class QueuedResourceState:
    r"""QueuedResourceState
    QueuedResourceState defines the details of the QueuedResource request.
    """
    
    accepted_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceptedData') }})
    active_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeData') }})
    creating_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatingData') }})
    deleting_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletingData') }})
    failed_data: Optional[FailedData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedData') }})
    provisioning_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioningData') }})
    state: Optional[QueuedResourceStateStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    suspended_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspendedData') }})
    suspending_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspendingData') }})
    
