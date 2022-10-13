from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import monitoredresourcemetadata
from . import metric
from . import point
from . import monitoredresource

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
    metadata: Optional[monitoredresourcemetadata.MonitoredResourceMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    metric: Optional[metric.Metric] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    metric_kind: Optional[TimeSeriesMetricKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricKind' }})
    points: Optional[List[point.Point]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points' }})
    resource: Optional[monitoredresource.MonitoredResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    value_type: Optional[TimeSeriesValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueType' }})
    
