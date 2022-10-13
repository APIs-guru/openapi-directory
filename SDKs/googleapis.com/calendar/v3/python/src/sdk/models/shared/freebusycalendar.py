from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timeperiod
from . import error


@dataclass_json
@dataclass
class FreeBusyCalendar:
    busy: Optional[List[timeperiod.TimePeriod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'busy' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
