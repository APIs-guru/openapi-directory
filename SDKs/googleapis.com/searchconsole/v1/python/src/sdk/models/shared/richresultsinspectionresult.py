from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RichResultsInspectionResultVerdictEnum(str, Enum):
    VERDICT_UNSPECIFIED = "VERDICT_UNSPECIFIED"
    PASS = "PASS"
    PARTIAL = "PARTIAL"
    FAIL = "FAIL"
    NEUTRAL = "NEUTRAL"


@dataclass_json
@dataclass
class RichResultsInspectionResult:
    r"""RichResultsInspectionResult
    Rich-Results inspection result, including any rich results found at this URL.
    """
    
    detected_items: Optional[List[DetectedItems]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detectedItems') }})
    verdict: Optional[RichResultsInspectionResultVerdictEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verdict') }})
    
