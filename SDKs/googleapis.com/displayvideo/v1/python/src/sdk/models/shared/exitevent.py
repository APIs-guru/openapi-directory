from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ExitEventTypeEnum(str, Enum):
    EXIT_EVENT_TYPE_UNSPECIFIED = "EXIT_EVENT_TYPE_UNSPECIFIED"
    EXIT_EVENT_TYPE_DEFAULT = "EXIT_EVENT_TYPE_DEFAULT"
    EXIT_EVENT_TYPE_BACKUP = "EXIT_EVENT_TYPE_BACKUP"


@dataclass_json
@dataclass
class ExitEvent:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reporting_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportingName' }})
    type: Optional[ExitEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
