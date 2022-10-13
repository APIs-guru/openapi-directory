from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Transfer:
    billable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billable' }})
    quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quota' }})
    used: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used' }})
    
