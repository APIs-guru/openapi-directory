from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeviceIPBlockCatalog:
    r"""DeviceIPBlockCatalog
    List of IP blocks used by the Firebase Test Lab
    """
    
    ip_blocks: Optional[List[DeviceIPBlock]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipBlocks') }})
    
