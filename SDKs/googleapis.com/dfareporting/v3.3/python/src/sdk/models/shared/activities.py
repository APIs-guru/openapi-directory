from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimensionvalue


@dataclass_json
@dataclass
class Activities:
    filters: Optional[List[dimensionvalue.DimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    metric_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricNames' }})
    
