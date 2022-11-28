from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ItemsTypeEnum(str, Enum):
    RAW = "raw"
    EXT4 = "ext4"


@dataclass_json
@dataclass
class Items:
    r"""Items
    The values to assign to each partition in this Node Pool's custom disk layout.
    
    """
    
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: Optional[ItemsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
