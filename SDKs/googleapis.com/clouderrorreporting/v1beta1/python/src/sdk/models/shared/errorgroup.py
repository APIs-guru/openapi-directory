from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import trackingissue

class ErrorGroupResolutionStatusEnum(str, Enum):
    RESOLUTION_STATUS_UNSPECIFIED = "RESOLUTION_STATUS_UNSPECIFIED"
    OPEN = "OPEN"
    ACKNOWLEDGED = "ACKNOWLEDGED"
    RESOLVED = "RESOLVED"
    MUTED = "MUTED"


@dataclass_json
@dataclass
class ErrorGroup:
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resolution_status: Optional[ErrorGroupResolutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolutionStatus' }})
    tracking_issues: Optional[List[trackingissue.TrackingIssue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingIssues' }})
    
