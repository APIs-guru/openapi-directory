from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AwsVMDetailsArchitectureEnum(str, Enum):
    VM_ARCHITECTURE_UNSPECIFIED = "VM_ARCHITECTURE_UNSPECIFIED"
    I386 = "I386"
    X86_64 = "X86_64"
    ARM64 = "ARM64"
    X86_64_MAC = "X86_64_MAC"

class AwsVMDetailsBootOptionEnum(str, Enum):
    BOOT_OPTION_UNSPECIFIED = "BOOT_OPTION_UNSPECIFIED"
    EFI = "EFI"
    BIOS = "BIOS"

class AwsVMDetailsPowerStateEnum(str, Enum):
    POWER_STATE_UNSPECIFIED = "POWER_STATE_UNSPECIFIED"
    ON = "ON"
    OFF = "OFF"
    SUSPENDED = "SUSPENDED"
    PENDING = "PENDING"

class AwsVMDetailsVirtualizationTypeEnum(str, Enum):
    VM_VIRTUALIZATION_TYPE_UNSPECIFIED = "VM_VIRTUALIZATION_TYPE_UNSPECIFIED"
    HVM = "HVM"
    PARAVIRTUAL = "PARAVIRTUAL"


@dataclass_json
@dataclass
class AwsVMDetails:
    r"""AwsVMDetails
    AwsVmDetails describes a VM in AWS.
    """
    
    architecture: Optional[AwsVMDetailsArchitectureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('architecture') }})
    boot_option: Optional[AwsVMDetailsBootOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootOption') }})
    committed_storage_mb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committedStorageMb') }})
    cpu_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuCount') }})
    disk_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskCount') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    memory_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryMb') }})
    os_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osDescription') }})
    power_state: Optional[AwsVMDetailsPowerStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerState') }})
    security_groups: Optional[List[AwsSecurityGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroups') }})
    source_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDescription') }})
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceId') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    virtualization_type: Optional[AwsVMDetailsVirtualizationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualizationType') }})
    vm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmId') }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcId') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
