from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class IamBindingActionEnum(str, Enum):
    ACTION_UNSPECIFIED = "ACTION_UNSPECIFIED"
    ADD = "ADD"
    REMOVE = "REMOVE"


@dataclass_json
@dataclass
class IamBinding:
    action: Optional[IamBindingActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    member: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    
