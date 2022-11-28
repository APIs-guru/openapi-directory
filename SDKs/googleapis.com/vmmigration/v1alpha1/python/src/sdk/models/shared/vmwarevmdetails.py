from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VmwareVMDetailsBootOptionEnum(str, Enum):
    BOOT_OPTION_UNSPECIFIED = "BOOT_OPTION_UNSPECIFIED"
    EFI = "EFI"
    BIOS = "BIOS"

class VmwareVMDetailsPowerStateEnum(str, Enum):
    POWER_STATE_UNSPECIFIED = "POWER_STATE_UNSPECIFIED"
    ON = "ON"
    OFF = "OFF"
    SUSPENDED = "SUSPENDED"


@dataclass_json
@dataclass
class VmwareVMDetailsInput:
    r"""VmwareVMDetailsInput
    VmwareVmDetails describes a VM in vCenter.
    """
    
    committed_storage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committedStorage') }})
    committed_storage_mb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committedStorageMb') }})
    cpu_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuCount') }})
    datacenter_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datacenterDescription') }})
    datacenter_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datacenterId') }})
    disk_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskCount') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    guest_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestDescription') }})
    memory_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryMb') }})
    power_state: Optional[VmwareVMDetailsPowerStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerState') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    vm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmId') }})
    

@dataclass_json
@dataclass
class VmwareVMDetails:
    r"""VmwareVMDetails
    VmwareVmDetails describes a VM in vCenter.
    """
    
    boot_option: Optional[VmwareVMDetailsBootOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootOption') }})
    committed_storage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committedStorage') }})
    committed_storage_mb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committedStorageMb') }})
    cpu_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuCount') }})
    datacenter_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datacenterDescription') }})
    datacenter_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datacenterId') }})
    disk_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskCount') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    guest_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestDescription') }})
    memory_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryMb') }})
    power_state: Optional[VmwareVMDetailsPowerStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerState') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    vm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmId') }})
    
