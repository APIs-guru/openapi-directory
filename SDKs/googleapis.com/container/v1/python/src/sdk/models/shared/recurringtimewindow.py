from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timewindow


@dataclass_json
@dataclass
class RecurringTimeWindow:
    recurrence: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recurrence' }})
    window: Optional[timewindow.TimeWindow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'window' }})
    
