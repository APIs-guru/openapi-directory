from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import status

class TargetChangeTargetChangeTypeEnum(str, Enum):
    NO_CHANGE = "NO_CHANGE"
    ADD = "ADD"
    REMOVE = "REMOVE"
    CURRENT = "CURRENT"
    RESET = "RESET"


@dataclass_json
@dataclass
class TargetChange:
    cause: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cause' }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTime' }})
    resume_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resumeToken' }})
    target_change_type: Optional[TargetChangeTargetChangeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetChangeType' }})
    target_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetIds' }})
    
