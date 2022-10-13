from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class DisplayOptionTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    SUCCESS = "SUCCESS"
    WARNING = "WARNING"
    DANGER = "DANGER"
    INFO = "INFO"


@dataclass_json
@dataclass
class DisplayOption:
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: DisplayOptionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
