from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import logentry
from . import metricvalueset
from . import quotaproperties
from . import resourceinfo
from . import tracespan

class OperationImportanceEnum(str, Enum):
    LOW = "LOW"
    HIGH = "HIGH"
    DEBUG = "DEBUG"


@dataclass_json
@dataclass
class Operation:
    consumer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerId' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    importance: Optional[OperationImportanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importance' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    log_entries: Optional[List[logentry.LogEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logEntries' }})
    metric_value_sets: Optional[List[metricvalueset.MetricValueSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricValueSets' }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationId' }})
    operation_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationName' }})
    quota_properties: Optional[quotaproperties.QuotaProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaProperties' }})
    resources: Optional[List[resourceinfo.ResourceInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    trace_spans: Optional[List[tracespan.TraceSpan]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traceSpans' }})
    user_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLabels' }})
    
