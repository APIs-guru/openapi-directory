from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import metricstructuredname


@dataclass_json
@dataclass
class MetricUpdate:
    cumulative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cumulative' }})
    distribution: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distribution' }})
    gauge: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gauge' }})
    internal: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internal' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    mean_count: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meanCount' }})
    mean_sum: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meanSum' }})
    name: Optional[metricstructuredname.MetricStructuredName] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    scalar: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scalar' }})
    set: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'set' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
