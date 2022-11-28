from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class QuotaOperationQuotaModeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    NORMAL = "NORMAL"
    BEST_EFFORT = "BEST_EFFORT"
    CHECK_ONLY = "CHECK_ONLY"
    ADJUST_ONLY = "ADJUST_ONLY"


@dataclass_json
@dataclass
class QuotaOperation:
    r"""QuotaOperation
    Represents information regarding a quota operation.
    """
    
    consumer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerId') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    method_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodName') }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    quota_metrics: Optional[List[MetricValueSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaMetrics') }})
    quota_mode: Optional[QuotaOperationQuotaModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaMode') }})
    
