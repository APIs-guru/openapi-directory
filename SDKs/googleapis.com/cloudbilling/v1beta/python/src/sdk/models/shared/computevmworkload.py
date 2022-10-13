from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import guestaccelerator
from . import usage
from . import machinetype
from . import persistentdisk


@dataclass_json
@dataclass
class ComputeVMWorkload:
    enable_confidential_compute: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableConfidentialCompute' }})
    guest_accelerator: Optional[guestaccelerator.GuestAccelerator] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guestAccelerator' }})
    instances_running: Optional[usage.Usage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instancesRunning' }})
    licenses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenses' }})
    machine_type: Optional[machinetype.MachineType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineType' }})
    persistent_disks: Optional[List[persistentdisk.PersistentDisk]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persistentDisks' }})
    preemptible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preemptible' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    
