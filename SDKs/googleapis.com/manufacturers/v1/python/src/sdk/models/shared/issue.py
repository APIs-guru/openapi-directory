from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""Issue
    Product issue.
    """
    
    attribute: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    resolution: Optional[IssueResolutionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    severity: Optional[IssueSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
