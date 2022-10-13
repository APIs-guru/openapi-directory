from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deviceipblock


@dataclass_json
@dataclass
class DeviceIPBlockCatalog:
    ip_blocks: Optional[List[deviceipblock.DeviceIPBlock]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipBlocks' }})
    
