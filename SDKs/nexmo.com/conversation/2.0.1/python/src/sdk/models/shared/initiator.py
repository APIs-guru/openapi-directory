from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InitiatorJoined:
    is_system: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSystem' }})
    member_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member_id' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    

@dataclass_json
@dataclass
class Initiator:
    joined: Optional[InitiatorJoined] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'joined' }})
    
