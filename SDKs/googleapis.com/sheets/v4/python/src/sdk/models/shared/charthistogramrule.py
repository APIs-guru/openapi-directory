from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChartHistogramRule:
    interval_size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intervalSize' }})
    max_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxValue' }})
    min_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minValue' }})
    
