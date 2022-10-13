from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error


@dataclass_json
@dataclass
class FreeBusyGroup:
    calendars: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendars' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
