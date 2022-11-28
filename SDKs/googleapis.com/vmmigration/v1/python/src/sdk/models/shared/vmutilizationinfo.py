from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VMUtilizationInfoInput:
    r"""VMUtilizationInfoInput
    Utilization information of a single VM.
    """
    
    utilization: Optional[VMUtilizationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utilization') }})
    vm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmId') }})
    vmware_vm_details: Optional[VmwareVMDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmwareVmDetails') }})
    

@dataclass_json
@dataclass
class VMUtilizationInfo:
    r"""VMUtilizationInfo
    Utilization information of a single VM.
    """
    
    utilization: Optional[VMUtilizationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utilization') }})
    vm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmId') }})
    vmware_vm_details: Optional[VmwareVMDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmwareVmDetails') }})
    
