from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphamonitorexecutionstatsrequestgroupby

class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum(str, Enum):
    BORG_TASK_METRIC_UNSPECIFIED = "BORG_TASK_METRIC_UNSPECIFIED"
    TASK_INDIVIDUAL_COUNT = "TASK_INDIVIDUAL_COUNT"
    EVENT_COUNT = "EVENT_COUNT"
    EVENT_DURATION = "EVENT_DURATION"
    TASK_INDIVIDUAL_DURATION = "TASK_INDIVIDUAL_DURATION"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent:
    borg_task_metric: Optional[GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borgTaskMetric' }})
    data_filters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataFilters' }})
    fetch_filters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fetchFilters' }})
    group_by: Optional[googlecloudintegrationsv1alphamonitorexecutionstatsrequestgroupby.GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestGroupBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupBy' }})
    point_operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pointOperation' }})
    time_delta: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeDelta' }})
    
