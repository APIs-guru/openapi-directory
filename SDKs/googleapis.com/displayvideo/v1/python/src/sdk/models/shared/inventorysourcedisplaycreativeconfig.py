from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dimensions


@dataclass_json
@dataclass
class InventorySourceDisplayCreativeConfig:
    creative_size: Optional[dimensions.Dimensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeSize' }})
    
