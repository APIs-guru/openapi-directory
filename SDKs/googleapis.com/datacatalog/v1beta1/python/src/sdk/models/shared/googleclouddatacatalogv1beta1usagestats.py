from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1UsageStats:
    total_cancellations: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCancellations' }})
    total_completions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCompletions' }})
    total_execution_time_for_completions_millis: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalExecutionTimeForCompletionsMillis' }})
    total_failures: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalFailures' }})
    
