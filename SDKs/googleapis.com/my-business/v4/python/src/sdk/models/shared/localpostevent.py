from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timeinterval


@dataclass_json
@dataclass
class LocalPostEvent:
    schedule: Optional[timeinterval.TimeInterval] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
