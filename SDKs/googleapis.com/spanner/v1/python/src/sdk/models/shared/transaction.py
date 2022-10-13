from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Transaction:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    read_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTimestamp' }})
    
