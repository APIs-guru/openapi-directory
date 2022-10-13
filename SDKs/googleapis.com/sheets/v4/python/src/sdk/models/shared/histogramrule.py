from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HistogramRule:
    end: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    interval: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    start: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    
