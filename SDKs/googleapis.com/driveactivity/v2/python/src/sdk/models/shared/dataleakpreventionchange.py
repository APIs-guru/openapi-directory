from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DataLeakPreventionChangeTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    FLAGGED = "FLAGGED"
    CLEARED = "CLEARED"


@dataclass_json
@dataclass
class DataLeakPreventionChange:
    type: Optional[DataLeakPreventionChangeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
