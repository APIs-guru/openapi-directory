from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RichResultsIssueSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    WARNING = "WARNING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class RichResultsIssue:
    issue_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issueMessage' }})
    severity: Optional[RichResultsIssueSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    
