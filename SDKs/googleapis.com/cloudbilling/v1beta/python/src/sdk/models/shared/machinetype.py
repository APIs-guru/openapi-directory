from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import custommachinetype
from . import predefinedmachinetype


@dataclass_json
@dataclass
class MachineType:
    custom_machine_type: Optional[custommachinetype.CustomMachineType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customMachineType' }})
    predefined_machine_type: Optional[predefinedmachinetype.PredefinedMachineType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predefinedMachineType' }})
    
