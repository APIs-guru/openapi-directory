from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import vmcreationconfig
from . import vmselectionconfig


@dataclass_json
@dataclass
class GenerateSSHScriptRequest:
    vm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vm' }})
    vm_creation_config: Optional[vmcreationconfig.VMCreationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmCreationConfig' }})
    vm_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmPort' }})
    vm_selection_config: Optional[vmselectionconfig.VMSelectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmSelectionConfig' }})
    
