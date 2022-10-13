from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import date
from . import date


@dataclass_json
@dataclass
class CollectionPeriod:
    first_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstDate' }})
    last_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastDate' }})
    
