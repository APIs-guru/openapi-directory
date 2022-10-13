from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import member_state_enum


@dataclass_json
@dataclass
class EventRetrieved:
    body: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    href: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    state: Optional[member_state_enum.MemberStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    timestamp: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
