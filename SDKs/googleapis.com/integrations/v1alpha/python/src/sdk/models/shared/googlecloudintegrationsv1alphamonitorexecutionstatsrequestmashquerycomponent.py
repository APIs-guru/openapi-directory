from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum(str, Enum):
    BORG_TASK_METRIC_UNSPECIFIED = "BORG_TASK_METRIC_UNSPECIFIED"
    TASK_INDIVIDUAL_COUNT = "TASK_INDIVIDUAL_COUNT"
    EVENT_COUNT = "EVENT_COUNT"
    EVENT_DURATION = "EVENT_DURATION"
    TASK_INDIVIDUAL_DURATION = "TASK_INDIVIDUAL_DURATION"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent:
    r"""GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent
    The components for constructing MashQuery.
    """
    
    borg_task_metric: Optional[GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borgTaskMetric') }})
    data_filters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFilters') }})
    fetch_filters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetchFilters') }})
    group_by: Optional[GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestGroupBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupBy') }})
    point_operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointOperation') }})
    time_delta: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeDelta') }})
    
