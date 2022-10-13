from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timeinterval
from . import typedvalue


@dataclass_json
@dataclass
class PointData:
    time_interval: Optional[timeinterval.TimeInterval] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeInterval' }})
    values: Optional[List[typedvalue.TypedValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
