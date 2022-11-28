from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DynamicGroupStatusStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    UP_TO_DATE = "UP_TO_DATE"
    UPDATING_MEMBERSHIPS = "UPDATING_MEMBERSHIPS"
    INVALID_QUERY = "INVALID_QUERY"


@dataclass_json
@dataclass
class DynamicGroupStatus:
    r"""DynamicGroupStatus
    The current status of a dynamic group along with timestamp.
    """
    
    status: Optional[DynamicGroupStatusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusTime') }})
    
