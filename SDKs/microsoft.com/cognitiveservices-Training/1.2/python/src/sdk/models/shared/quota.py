from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Quota:
    time_until_reset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeUntilReset' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Total' }})
    used: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Used' }})
    
