from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleTypeDate:
    day: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'day' }})
    month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'month' }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    
