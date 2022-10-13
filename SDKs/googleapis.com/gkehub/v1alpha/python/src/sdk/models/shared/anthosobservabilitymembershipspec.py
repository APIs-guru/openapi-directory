from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AnthosObservabilityMembershipSpec:
    do_not_optimize_metrics: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doNotOptimizeMetrics' }})
    enable_stackdriver_on_applications: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableStackdriverOnApplications' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
