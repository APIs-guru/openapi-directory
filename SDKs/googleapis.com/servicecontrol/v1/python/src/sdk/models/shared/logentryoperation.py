from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LogEntryOperation:
    first: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    producer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'producer' }})
    
