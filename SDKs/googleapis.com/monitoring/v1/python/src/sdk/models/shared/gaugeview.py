from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GaugeView:
    lower_bound: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lowerBound' }})
    upper_bound: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upperBound' }})
    
