from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LocalPostMetrics:
    r"""LocalPostMetrics
    All the metrics requested for a Local Post.
    """
    
    local_post_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localPostName') }})
    metric_values: Optional[List[MetricValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricValues') }})
    
