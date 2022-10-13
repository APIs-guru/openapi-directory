from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import quotaerror
from . import allocateinfo
from . import metricvalueset


@dataclass_json
@dataclass
class AllocateQuotaResponse:
    allocate_errors: Optional[List[quotaerror.QuotaError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allocateErrors' }})
    allocate_info: Optional[allocateinfo.AllocateInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allocateInfo' }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationId' }})
    quota_metrics: Optional[List[metricvalueset.MetricValueSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaMetrics' }})
    service_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceConfigId' }})
    
