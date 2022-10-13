from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import appstarttime
from . import graphicsstats
from . import perfenvironment

class PerfMetricsSummaryPerfMetricsEnum(str, Enum):
    PERF_METRIC_TYPE_UNSPECIFIED = "perfMetricTypeUnspecified"
    MEMORY = "memory"
    CPU = "cpu"
    NETWORK = "network"
    GRAPHICS = "graphics"


@dataclass_json
@dataclass
class PerfMetricsSummary:
    app_start_time: Optional[appstarttime.AppStartTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appStartTime' }})
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionId' }})
    graphics_stats: Optional[graphicsstats.GraphicsStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'graphicsStats' }})
    history_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'historyId' }})
    perf_environment: Optional[perfenvironment.PerfEnvironment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perfEnvironment' }})
    perf_metrics: Optional[List[PerfMetricsSummaryPerfMetricsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perfMetrics' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    step_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stepId' }})
    
