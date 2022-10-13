from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import timetarget

class SeekSubscriptionRequestNamedTargetEnum(str, Enum):
    NAMED_TARGET_UNSPECIFIED = "NAMED_TARGET_UNSPECIFIED"
    TAIL = "TAIL"
    HEAD = "HEAD"


@dataclass_json
@dataclass
class SeekSubscriptionRequest:
    named_target: Optional[SeekSubscriptionRequestNamedTargetEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namedTarget' }})
    time_target: Optional[timetarget.TimeTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeTarget' }})
    
