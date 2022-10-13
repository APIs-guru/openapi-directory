from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import runtimeacceleratorconfig
from . import containerimage
from . import localdisk
from . import encryptionconfig
from . import runtimeshieldedinstanceconfig

class VirtualMachineConfigNicTypeEnum(str, Enum):
    UNSPECIFIED_NIC_TYPE = "UNSPECIFIED_NIC_TYPE"
    VIRTIO_NET = "VIRTIO_NET"
    GVNIC = "GVNIC"


@dataclass_json
@dataclass
class VirtualMachineConfig:
    accelerator_config: Optional[runtimeacceleratorconfig.RuntimeAcceleratorConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceleratorConfig' }})
    boot_image: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootImage' }})
    container_images: Optional[List[containerimage.ContainerImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerImages' }})
    data_disk: Optional[localdisk.LocalDisk] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataDisk' }})
    encryption_config: Optional[encryptionconfig.EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionConfig' }})
    guest_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guestAttributes' }})
    internal_ip_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalIpOnly' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineType' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    nic_type: Optional[VirtualMachineConfigNicTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nicType' }})
    reserved_ip_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservedIpRange' }})
    shielded_instance_config: Optional[runtimeshieldedinstanceconfig.RuntimeShieldedInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shieldedInstanceConfig' }})
    subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnet' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
