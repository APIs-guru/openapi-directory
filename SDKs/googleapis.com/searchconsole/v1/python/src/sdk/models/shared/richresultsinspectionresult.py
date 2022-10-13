from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import detecteditems

class RichResultsInspectionResultVerdictEnum(str, Enum):
    VERDICT_UNSPECIFIED = "VERDICT_UNSPECIFIED"
    PASS = "PASS"
    PARTIAL = "PARTIAL"
    FAIL = "FAIL"
    NEUTRAL = "NEUTRAL"


@dataclass_json
@dataclass
class RichResultsInspectionResult:
    detected_items: Optional[List[detecteditems.DetectedItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detectedItems' }})
    verdict: Optional[RichResultsInspectionResultVerdictEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verdict' }})
    
