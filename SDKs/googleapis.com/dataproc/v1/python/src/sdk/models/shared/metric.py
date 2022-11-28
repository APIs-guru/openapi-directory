from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""Metric
    A Dataproc OSS metric.
    """
    
    metric_overrides: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricOverrides') }})
    metric_source: Optional[MetricMetricSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricSource') }})
    
