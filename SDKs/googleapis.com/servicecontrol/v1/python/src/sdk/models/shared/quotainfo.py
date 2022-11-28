from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QuotaInfo:
    r"""QuotaInfo
    Contains the quota information for a quota check response.
    """
    
    limit_exceeded: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitExceeded') }})
    quota_consumed: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaConsumed') }})
    quota_metrics: Optional[List[MetricValueSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaMetrics') }})
    
