from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import numericbucketingresult

class CompensationHistogramResultTypeEnum(str, Enum):
    COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED = "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
    BASE = "BASE"
    ANNUALIZED_BASE = "ANNUALIZED_BASE"
    ANNUALIZED_TOTAL = "ANNUALIZED_TOTAL"


@dataclass_json
@dataclass
class CompensationHistogramResult:
    result: Optional[numericbucketingresult.NumericBucketingResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    type: Optional[CompensationHistogramResultTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
