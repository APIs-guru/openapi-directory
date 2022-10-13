from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import duration
from . import duration


@dataclass_json
@dataclass
class AppStartTime:
    fully_drawn_time: Optional[duration.Duration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullyDrawnTime' }})
    initial_display_time: Optional[duration.Duration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialDisplayTime' }})
    
