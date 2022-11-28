from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CompensationHistogramRequestTypeEnum(str, Enum):
    COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED = "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
    BASE = "BASE"
    ANNUALIZED_BASE = "ANNUALIZED_BASE"
    ANNUALIZED_TOTAL = "ANNUALIZED_TOTAL"


@dataclass_json
@dataclass
class CompensationHistogramRequest:
    r"""CompensationHistogramRequest
    Input only. Compensation based histogram request.
    """
    
    bucketing_option: Optional[NumericBucketingOption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketingOption') }})
    type: Optional[CompensationHistogramRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
