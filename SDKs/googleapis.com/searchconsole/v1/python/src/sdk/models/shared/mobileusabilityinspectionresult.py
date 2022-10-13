from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import mobileusabilityissue

class MobileUsabilityInspectionResultVerdictEnum(str, Enum):
    VERDICT_UNSPECIFIED = "VERDICT_UNSPECIFIED"
    PASS = "PASS"
    PARTIAL = "PARTIAL"
    FAIL = "FAIL"
    NEUTRAL = "NEUTRAL"


@dataclass_json
@dataclass
class MobileUsabilityInspectionResult:
    issues: Optional[List[mobileusabilityissue.MobileUsabilityIssue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issues' }})
    verdict: Optional[MobileUsabilityInspectionResultVerdictEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verdict' }})
    
