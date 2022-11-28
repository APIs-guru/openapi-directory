from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TargetChangeTargetChangeTypeEnum(str, Enum):
    NO_CHANGE = "NO_CHANGE"
    ADD = "ADD"
    REMOVE = "REMOVE"
    CURRENT = "CURRENT"
    RESET = "RESET"


@dataclass_json
@dataclass
class TargetChange:
    r"""TargetChange
    Targets being watched have changed.
    """
    
    cause: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    resume_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resumeToken') }})
    target_change_type: Optional[TargetChangeTargetChangeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetChangeType') }})
    target_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetIds') }})
    
