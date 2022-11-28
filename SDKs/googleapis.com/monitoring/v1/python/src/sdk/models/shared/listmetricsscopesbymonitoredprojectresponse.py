from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListMetricsScopesByMonitoredProjectResponse:
    r"""ListMetricsScopesByMonitoredProjectResponse
    Response for the ListMetricsScopesByMonitoredProject method.
    """
    
    metrics_scopes: Optional[List[MetricsScope]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricsScopes') }})
    
