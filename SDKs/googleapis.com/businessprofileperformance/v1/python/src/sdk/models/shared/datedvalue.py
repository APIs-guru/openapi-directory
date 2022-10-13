from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import date


@dataclass_json
@dataclass
class DatedValue:
    date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
