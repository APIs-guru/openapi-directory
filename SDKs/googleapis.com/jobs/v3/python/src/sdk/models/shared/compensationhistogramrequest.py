from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import numericbucketingoption

class CompensationHistogramRequestTypeEnum(str, Enum):
    COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED = "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
    BASE = "BASE"
    ANNUALIZED_BASE = "ANNUALIZED_BASE"
    ANNUALIZED_TOTAL = "ANNUALIZED_TOTAL"


@dataclass_json
@dataclass
class CompensationHistogramRequest:
    bucketing_option: Optional[numericbucketingoption.NumericBucketingOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketingOption' }})
    type: Optional[CompensationHistogramRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
