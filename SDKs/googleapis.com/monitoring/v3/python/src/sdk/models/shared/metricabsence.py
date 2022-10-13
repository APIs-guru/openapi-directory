from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aggregation
from . import trigger


@dataclass_json
@dataclass
class MetricAbsence:
    aggregations: Optional[List[aggregation.Aggregation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregations' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    trigger: Optional[trigger.Trigger] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trigger' }})
    
