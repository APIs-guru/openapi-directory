from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CompensationHistogramResultTypeEnum(str, Enum):
    COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED = "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
    BASE = "BASE"
    ANNUALIZED_BASE = "ANNUALIZED_BASE"
    ANNUALIZED_TOTAL = "ANNUALIZED_TOTAL"


@dataclass_json
@dataclass
class CompensationHistogramResult:
    r"""CompensationHistogramResult
    Output only. Compensation based histogram result.
    """
    
    result: Optional[NumericBucketingResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    type: Optional[CompensationHistogramResultTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
