from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metricsvalue
from . import metricsvalue
from . import metricsvalue


@dataclass_json
@dataclass
class Metrics:
    active_users: Optional[List[metricsvalue.MetricsValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeUsers' }})
    failed_executions: Optional[List[metricsvalue.MetricsValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedExecutions' }})
    total_executions: Optional[List[metricsvalue.MetricsValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalExecutions' }})
    
