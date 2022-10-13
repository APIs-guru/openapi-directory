from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimestampResConversation:
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    destroyed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destroyed' }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    
