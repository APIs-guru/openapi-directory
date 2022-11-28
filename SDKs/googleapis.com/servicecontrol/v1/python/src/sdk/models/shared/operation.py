from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OperationImportanceEnum(str, Enum):
    LOW = "LOW"
    HIGH = "HIGH"
    DEBUG = "DEBUG"


@dataclass_json
@dataclass
class Operation:
    r"""Operation
    Represents information regarding an operation.
    """
    
    consumer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerId') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    importance: Optional[OperationImportanceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importance') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    log_entries: Optional[List[LogEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logEntries') }})
    metric_value_sets: Optional[List[MetricValueSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricValueSets') }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    operation_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationName') }})
    quota_properties: Optional[QuotaProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaProperties') }})
    resources: Optional[List[ResourceInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    trace_spans: Optional[List[TraceSpan]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traceSpans') }})
    user_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabels') }})
    
