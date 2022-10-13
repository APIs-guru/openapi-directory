from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RestoreTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    UNTRASH = "UNTRASH"


@dataclass_json
@dataclass
class Restore:
    type: Optional[RestoreTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
