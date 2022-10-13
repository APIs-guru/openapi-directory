from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScaleQuestion:
    high: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'high' }})
    high_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highLabel' }})
    low: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'low' }})
    low_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lowLabel' }})
    
