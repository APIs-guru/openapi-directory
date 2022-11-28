from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WarningPriorityEnum(str, Enum):
    PRIORITY_UNSPECIFIED = "PRIORITY_UNSPECIFIED"
    INFO = "INFO"
    WARNING = "WARNING"
    ALERT = "ALERT"


@dataclass_json
@dataclass
class Warning:
    r"""Warning
    A non-fatal problem encountered during the execution of the build.
    """
    
    priority: Optional[WarningPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
