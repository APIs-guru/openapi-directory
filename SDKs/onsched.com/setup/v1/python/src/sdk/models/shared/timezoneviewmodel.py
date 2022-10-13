from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timezonesviewmodel


@dataclass_json
@dataclass
class TimezoneViewModel:
    regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    timezones: Optional[List[timezonesviewmodel.TimezonesViewModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezones' }})
    
