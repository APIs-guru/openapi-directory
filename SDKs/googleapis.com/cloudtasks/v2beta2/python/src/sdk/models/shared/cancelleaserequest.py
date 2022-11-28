from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CancelLeaseRequestResponseViewEnum(str, Enum):
    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass_json
@dataclass
class CancelLeaseRequest:
    r"""CancelLeaseRequest
    Request message for canceling a lease using CancelLease.
    """
    
    response_view: Optional[CancelLeaseRequestResponseViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseView') }})
    schedule_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleTime') }})
    
