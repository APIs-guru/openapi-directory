from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class WarningPriorityEnum(str, Enum):
    PRIORITY_UNSPECIFIED = "PRIORITY_UNSPECIFIED"
    INFO = "INFO"
    WARNING = "WARNING"
    ALERT = "ALERT"


@dataclass_json
@dataclass
class Warning:
    priority: Optional[WarningPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
