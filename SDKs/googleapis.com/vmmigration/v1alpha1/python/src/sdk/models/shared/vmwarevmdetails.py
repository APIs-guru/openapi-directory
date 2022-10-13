from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
class VmwareVMDetails:
    boot_option: Optional[VmwareVMDetailsBootOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootOption' }})
    committed_storage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committedStorage' }})
    committed_storage_mb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committedStorageMb' }})
    cpu_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuCount' }})
    datacenter_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datacenterDescription' }})
    datacenter_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datacenterId' }})
    disk_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskCount' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    guest_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guestDescription' }})
    memory_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryMb' }})
    power_state: Optional[VmwareVMDetailsPowerStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'powerState' }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    vm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmId' }})
    
