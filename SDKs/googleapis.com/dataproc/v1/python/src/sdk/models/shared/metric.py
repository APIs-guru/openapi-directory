from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class MetricMetricSourceEnum(str, Enum):
    METRIC_SOURCE_UNSPECIFIED = "METRIC_SOURCE_UNSPECIFIED"
    MONITORING_AGENT_DEFAULTS = "MONITORING_AGENT_DEFAULTS"
    HDFS = "HDFS"
    SPARK = "SPARK"
    YARN = "YARN"
    SPARK_HISTORY_SERVER = "SPARK_HISTORY_SERVER"
    HIVESERVER2 = "HIVESERVER2"


@dataclass_json
@dataclass
class Metric:
    metric_overrides: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricOverrides' }})
    metric_source: Optional[MetricMetricSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricSource' }})
    
