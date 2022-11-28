from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AmpIssueSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    WARNING = "WARNING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class AmpIssue:
    r"""AmpIssue
    AMP issue.
    """
    
    issue_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueMessage') }})
    severity: Optional[AmpIssueSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    
