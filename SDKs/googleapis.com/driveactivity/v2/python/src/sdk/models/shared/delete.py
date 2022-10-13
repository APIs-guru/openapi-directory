from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DeleteTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    TRASH = "TRASH"
    PERMANENT_DELETE = "PERMANENT_DELETE"


@dataclass_json
@dataclass
class Delete:
    type: Optional[DeleteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
