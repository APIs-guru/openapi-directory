from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import virtualmachineconfig


@dataclass_json
@dataclass
class VirtualMachine:
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceId' }})
    instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceName' }})
    virtual_machine_config: Optional[virtualmachineconfig.VirtualMachineConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualMachineConfig' }})
    
