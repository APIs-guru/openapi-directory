from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VMCreationConfig:
    subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnet' }})
    vm_machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmMachineType' }})
    vm_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmZone' }})
    
