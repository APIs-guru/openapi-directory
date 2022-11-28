from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Metrics:
    r"""Metrics
    Resource containing usage stats for a given script, based on the supplied filter and mask present in the request.
    """
    
    active_users: Optional[List[MetricsValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeUsers') }})
    failed_executions: Optional[List[MetricsValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedExecutions') }})
    total_executions: Optional[List[MetricsValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalExecutions') }})
    
