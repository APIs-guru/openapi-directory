from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class IssueResolutionEnum(str, Enum):
    RESOLUTION_UNSPECIFIED = "RESOLUTION_UNSPECIFIED"
    USER_ACTION = "USER_ACTION"
    PENDING_PROCESSING = "PENDING_PROCESSING"

class IssueSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    ERROR = "ERROR"
    WARNING = "WARNING"
    INFO = "INFO"


@dataclass_json
@dataclass
class Issue:
    attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    resolution: Optional[IssueResolutionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    severity: Optional[IssueSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
