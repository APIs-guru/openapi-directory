from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import principal

class InteractionTypeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    VIEW = "VIEW"
    EDIT = "EDIT"


@dataclass_json
@dataclass
class Interaction:
    interaction_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactionTime' }})
    principal: Optional[principal.Principal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principal' }})
    type: Optional[InteractionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
