from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComputeVMWorkload:
    r"""ComputeVMWorkload
    Specificies usage of a set of identical compute VM instances.
    """
    
    enable_confidential_compute: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableConfidentialCompute') }})
    guest_accelerator: Optional[GuestAccelerator] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestAccelerator') }})
    instances_running: Optional[Usage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instancesRunning') }})
    licenses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenses') }})
    machine_type: Optional[MachineType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    persistent_disks: Optional[List[PersistentDisk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistentDisks') }})
    preemptible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preemptible') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    
