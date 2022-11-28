from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AllocateQuotaResponse:
    r"""AllocateQuotaResponse
    Response message for the AllocateQuota method.
    """
    
    allocate_errors: Optional[List[QuotaError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocateErrors') }})
    allocate_info: Optional[AllocateInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocateInfo') }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    quota_metrics: Optional[List[MetricValueSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaMetrics') }})
    service_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceConfigId') }})
    
