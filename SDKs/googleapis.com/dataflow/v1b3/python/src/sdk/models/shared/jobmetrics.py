from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobMetrics:
    r"""JobMetrics
    JobMetrics contains a collection of metrics describing the detailed progress of a Dataflow job. Metrics correspond to user-defined and system-defined metrics in the job. This resource captures only the most recent values of each metric; time-series data can be queried for them (under the same metric names) from Cloud Monitoring.
    """
    
    metric_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricTime') }})
    metrics: Optional[List[MetricUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    
