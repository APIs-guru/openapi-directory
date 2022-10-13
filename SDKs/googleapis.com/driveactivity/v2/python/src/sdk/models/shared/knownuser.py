from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KnownUser:
    is_current_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isCurrentUser' }})
    person_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personName' }})
    
