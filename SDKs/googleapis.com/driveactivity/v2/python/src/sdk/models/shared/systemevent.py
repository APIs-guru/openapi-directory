from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SystemEventTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    USER_DELETION = "USER_DELETION"
    TRASH_AUTO_PURGE = "TRASH_AUTO_PURGE"


@dataclass_json
@dataclass
class SystemEvent:
    type: Optional[SystemEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
