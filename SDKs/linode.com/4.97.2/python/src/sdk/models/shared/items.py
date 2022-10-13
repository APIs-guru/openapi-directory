from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ItemsTypeEnum(str, Enum):
    RAW = "raw"
    EXT4 = "ext4"


@dataclass_json
@dataclass
class Items:
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    type: Optional[ItemsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
