from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VirtualMachineConfigNicTypeEnum(str, Enum):
    UNSPECIFIED_NIC_TYPE = "UNSPECIFIED_NIC_TYPE"
    VIRTIO_NET = "VIRTIO_NET"
    GVNIC = "GVNIC"


@dataclass_json
@dataclass
class VirtualMachineConfigInput:
    r"""VirtualMachineConfigInput
    The config settings for virtual machine.
    """
    
    accelerator_config: Optional[RuntimeAcceleratorConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorConfig') }})
    boot_image: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootImage') }})
    container_images: Optional[List[ContainerImage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerImages') }})
    data_disk: Optional[LocalDiskInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDisk') }})
    encryption_config: Optional[EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    internal_ip_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalIpOnly') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    nic_type: Optional[VirtualMachineConfigNicTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nicType') }})
    reserved_ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedIpRange') }})
    shielded_instance_config: Optional[RuntimeShieldedInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shieldedInstanceConfig') }})
    subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclass
class VirtualMachineConfig:
    r"""VirtualMachineConfig
    The config settings for virtual machine.
    """
    
    accelerator_config: Optional[RuntimeAcceleratorConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorConfig') }})
    boot_image: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootImage') }})
    container_images: Optional[List[ContainerImage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerImages') }})
    data_disk: Optional[LocalDisk] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDisk') }})
    encryption_config: Optional[EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    guest_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestAttributes') }})
    internal_ip_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalIpOnly') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    nic_type: Optional[VirtualMachineConfigNicTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nicType') }})
    reserved_ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedIpRange') }})
    shielded_instance_config: Optional[RuntimeShieldedInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shieldedInstanceConfig') }})
    subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
