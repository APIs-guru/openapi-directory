from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PerfMetricsSummaryPerfMetricsEnum(str, Enum):
    PERF_METRIC_TYPE_UNSPECIFIED = "perfMetricTypeUnspecified"
    MEMORY = "memory"
    CPU = "cpu"
    NETWORK = "network"
    GRAPHICS = "graphics"


@dataclass_json
@dataclass
class PerfMetricsSummary:
    r"""PerfMetricsSummary
    A summary of perf metrics collected and performance environment info
    """
    
    app_start_time: Optional[AppStartTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appStartTime') }})
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionId') }})
    graphics_stats: Optional[GraphicsStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('graphicsStats') }})
    history_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('historyId') }})
    perf_environment: Optional[PerfEnvironment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perfEnvironment') }})
    perf_metrics: Optional[List[PerfMetricsSummaryPerfMetricsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perfMetrics') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    step_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepId') }})
    
