from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MachineType:
    r"""MachineType
    Specification of machine series, memory, and number of vCPUs.
    """
    
    custom_machine_type: Optional[CustomMachineType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customMachineType') }})
    predefined_machine_type: Optional[PredefinedMachineType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predefinedMachineType') }})
    
