from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import vmresourcebasedcud


@dataclass_json
@dataclass
class Commitment:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    vm_resource_based_cud: Optional[vmresourcebasedcud.VMResourceBasedCud] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmResourceBasedCud' }})
    
