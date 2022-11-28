from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FixableTotalByDigestSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    MINIMAL = "MINIMAL"
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"


@dataclass_json
@dataclass
class FixableTotalByDigest:
    r"""FixableTotalByDigest
    Per resource and severity counts of fixable and total vulnerabilities.
    """
    
    fixable_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixableCount') }})
    resource_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUri') }})
    severity: Optional[FixableTotalByDigestSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    total_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    
