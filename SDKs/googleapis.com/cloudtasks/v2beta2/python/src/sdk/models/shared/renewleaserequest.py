from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RenewLeaseRequestResponseViewEnum(str, Enum):
    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass_json
@dataclass
class RenewLeaseRequest:
    lease_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leaseDuration' }})
    response_view: Optional[RenewLeaseRequestResponseViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseView' }})
    schedule_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleTime' }})
    
