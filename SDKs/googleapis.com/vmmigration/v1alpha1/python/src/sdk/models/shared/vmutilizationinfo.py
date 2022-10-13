from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import vmutilizationmetrics
from . import vmwarevmdetails


@dataclass_json
@dataclass
class VMUtilizationInfo:
    utilization: Optional[vmutilizationmetrics.VMUtilizationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utilization' }})
    vm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmId' }})
    vmware_vm_details: Optional[vmwarevmdetails.VmwareVMDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmwareVmDetails' }})
    
