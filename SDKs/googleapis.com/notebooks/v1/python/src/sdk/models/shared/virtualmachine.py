from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualMachineInput:
    r"""VirtualMachineInput
    Runtime using Virtual Machine for computing.
    """
    
    virtual_machine_config: Optional[VirtualMachineConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualMachineConfig') }})
    

@dataclass_json
@dataclass
class VirtualMachine:
    r"""VirtualMachine
    Runtime using Virtual Machine for computing.
    """
    
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceName') }})
    virtual_machine_config: Optional[VirtualMachineConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualMachineConfig') }})
    
