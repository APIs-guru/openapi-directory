from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SystemEventTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    USER_DELETION = "USER_DELETION"
    TRASH_AUTO_PURGE = "TRASH_AUTO_PURGE"


@dataclass_json
@dataclass
class SystemEvent:
    r"""SystemEvent
    Event triggered by system operations instead of end users.
    """
    
    type: Optional[SystemEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
