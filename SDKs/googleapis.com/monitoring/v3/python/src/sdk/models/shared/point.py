from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timeinterval
from . import typedvalue


@dataclass_json
@dataclass
class Point:
    interval: Optional[timeinterval.TimeInterval] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    value: Optional[typedvalue.TypedValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
