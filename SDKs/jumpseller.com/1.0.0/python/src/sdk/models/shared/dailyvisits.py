from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DailyVisits:
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    visits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visits' }})
    
