from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudstorageworkload
from . import computevmworkload


@dataclass_json
@dataclass
class Workload:
    cloud_storage_workload: Optional[cloudstorageworkload.CloudStorageWorkload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudStorageWorkload' }})
    compute_vm_workload: Optional[computevmworkload.ComputeVMWorkload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeVmWorkload' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
