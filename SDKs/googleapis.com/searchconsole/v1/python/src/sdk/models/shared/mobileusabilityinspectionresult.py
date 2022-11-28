from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MobileUsabilityInspectionResultVerdictEnum(str, Enum):
    VERDICT_UNSPECIFIED = "VERDICT_UNSPECIFIED"
    PASS = "PASS"
    PARTIAL = "PARTIAL"
    FAIL = "FAIL"
    NEUTRAL = "NEUTRAL"


@dataclass_json
@dataclass
class MobileUsabilityInspectionResult:
    r"""MobileUsabilityInspectionResult
    Mobile-usability inspection results.
    """
    
    issues: Optional[List[MobileUsabilityIssue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    verdict: Optional[MobileUsabilityInspectionResultVerdictEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verdict') }})
    
