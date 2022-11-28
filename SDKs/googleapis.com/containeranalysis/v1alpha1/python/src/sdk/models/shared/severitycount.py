from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SeverityCountSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    MINIMAL = "MINIMAL"
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"


@dataclass_json
@dataclass
class SeverityCount:
    r"""SeverityCount
    The number of occurrences created for a specific severity.
    """
    
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    severity: Optional[SeverityCountSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    
