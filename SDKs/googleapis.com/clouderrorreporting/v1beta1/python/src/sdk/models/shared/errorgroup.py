from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ErrorGroupResolutionStatusEnum(str, Enum):
    RESOLUTION_STATUS_UNSPECIFIED = "RESOLUTION_STATUS_UNSPECIFIED"
    OPEN = "OPEN"
    ACKNOWLEDGED = "ACKNOWLEDGED"
    RESOLVED = "RESOLVED"
    MUTED = "MUTED"


@dataclass_json
@dataclass
class ErrorGroup:
    r"""ErrorGroup
    Description of a group of similar error events.
    """
    
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resolution_status: Optional[ErrorGroupResolutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolutionStatus') }})
    tracking_issues: Optional[List[TrackingIssue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingIssues') }})
    
