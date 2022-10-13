from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class HashTypeEnum(str, Enum):
    NONE = "NONE"
    SHA256 = "SHA256"


@dataclass_json
@dataclass
class Hash:
    type: Optional[HashTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
