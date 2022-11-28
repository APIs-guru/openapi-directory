from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Workload:
    r"""Workload
    Specifies usage on a single Google Cloud product over a time frame. Each Google Cloud product has its own message, containing specific product configuration parameters of the product usage amounts along each dimension in which the product is billed.
    """
    
    cloud_storage_workload: Optional[CloudStorageWorkload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudStorageWorkload') }})
    compute_vm_workload: Optional[ComputeVMWorkload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeVmWorkload') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
