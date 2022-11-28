from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TimeSeriesMetricKindEnum(str, Enum):
    METRIC_KIND_UNSPECIFIED = "METRIC_KIND_UNSPECIFIED"
    GAUGE = "GAUGE"
    DELTA = "DELTA"
    CUMULATIVE = "CUMULATIVE"

class TimeSeriesValueTypeEnum(str, Enum):
    VALUE_TYPE_UNSPECIFIED = "VALUE_TYPE_UNSPECIFIED"
    BOOL = "BOOL"
    INT64 = "INT64"
    DOUBLE = "DOUBLE"
    STRING = "STRING"
    DISTRIBUTION = "DISTRIBUTION"
    MONEY = "MONEY"


@dataclass_json
@dataclass
class TimeSeries:
    r"""TimeSeries
    A collection of data points that describes the time-varying values of a metric. A time series is identified by a combination of a fully-specified monitored resource and a fully-specified metric. This type is used for both listing and creating time series.
    """
    
    metadata: Optional[MonitoredResourceMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    metric: Optional[Metric] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    metric_kind: Optional[TimeSeriesMetricKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricKind') }})
    points: Optional[List[Point]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    resource: Optional[MonitoredResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value_type: Optional[TimeSeriesValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueType') }})
    
