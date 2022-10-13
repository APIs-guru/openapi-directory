from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LookbackWindow:
    click_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickDays' }})
    impression_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impressionDays' }})
    
