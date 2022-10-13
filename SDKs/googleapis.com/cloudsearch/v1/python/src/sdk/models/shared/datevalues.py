from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import date


@dataclass_json
@dataclass
class DateValues:
    values: Optional[List[date.Date]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
