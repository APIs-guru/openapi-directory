from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RichResultsIssueSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    WARNING = "WARNING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class RichResultsIssue:
    r"""RichResultsIssue
    Severity and status of a single issue affecting a single rich result instance on a page.
    """
    
    issue_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueMessage') }})
    severity: Optional[RichResultsIssueSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    
