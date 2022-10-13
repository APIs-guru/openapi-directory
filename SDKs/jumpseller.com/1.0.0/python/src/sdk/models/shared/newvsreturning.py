from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NewVsReturning:
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    new: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new' }})
    returning: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returning' }})
    
