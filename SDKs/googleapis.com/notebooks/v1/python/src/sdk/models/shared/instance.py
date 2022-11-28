from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InstanceBootDiskTypeEnum(str, Enum):
    DISK_TYPE_UNSPECIFIED = "DISK_TYPE_UNSPECIFIED"
    PD_STANDARD = "PD_STANDARD"
    PD_SSD = "PD_SSD"
    PD_BALANCED = "PD_BALANCED"
    PD_EXTREME = "PD_EXTREME"

class InstanceDataDiskTypeEnum(str, Enum):
    DISK_TYPE_UNSPECIFIED = "DISK_TYPE_UNSPECIFIED"
    PD_STANDARD = "PD_STANDARD"
    PD_SSD = "PD_SSD"
    PD_BALANCED = "PD_BALANCED"
    PD_EXTREME = "PD_EXTREME"

class InstanceDiskEncryptionEnum(str, Enum):
    DISK_ENCRYPTION_UNSPECIFIED = "DISK_ENCRYPTION_UNSPECIFIED"
    GMEK = "GMEK"
    CMEK = "CMEK"

class InstanceNicTypeEnum(str, Enum):
    UNSPECIFIED_NIC_TYPE = "UNSPECIFIED_NIC_TYPE"
    VIRTIO_NET = "VIRTIO_NET"
    GVNIC = "GVNIC"

class InstanceStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    STARTING = "STARTING"
    PROVISIONING = "PROVISIONING"
    ACTIVE = "ACTIVE"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"
    DELETED = "DELETED"
    UPGRADING = "UPGRADING"
    INITIALIZING = "INITIALIZING"
    REGISTERING = "REGISTERING"
    SUSPENDING = "SUSPENDING"
    SUSPENDED = "SUSPENDED"


@dataclass_json
@dataclass
class Instance:
    r"""Instance
    The definition of a notebook instance.
    """
    
    accelerator_config: Optional[AcceleratorConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorConfig') }})
    boot_disk_size_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootDiskSizeGb') }})
    boot_disk_type: Optional[InstanceBootDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootDiskType') }})
    can_ip_forward: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canIpForward') }})
    container_image: Optional[ContainerImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerImage') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    custom_gpu_driver_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customGpuDriverPath') }})
    data_disk_size_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDiskSizeGb') }})
    data_disk_type: Optional[InstanceDataDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDiskType') }})
    disk_encryption: Optional[InstanceDiskEncryptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskEncryption') }})
    disks: Optional[List[Disk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disks') }})
    install_gpu_driver: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installGpuDriver') }})
    instance_owners: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceOwners') }})
    kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKey') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    nic_type: Optional[InstanceNicTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nicType') }})
    no_proxy_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noProxyAccess') }})
    no_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noPublicIp') }})
    no_remove_data_disk: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noRemoveDataDisk') }})
    post_startup_script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postStartupScript') }})
    proxy_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxyUri') }})
    reservation_affinity: Optional[ReservationAffinity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservationAffinity') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    service_account_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountScopes') }})
    shielded_instance_config: Optional[ShieldedInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shieldedInstanceConfig') }})
    state: Optional[InstanceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    upgrade_history: Optional[List[UpgradeHistoryEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeHistory') }})
    vm_image: Optional[VMImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmImage') }})
    

@dataclass_json
@dataclass
class InstanceInput:
    r"""InstanceInput
    The definition of a notebook instance.
    """
    
    accelerator_config: Optional[AcceleratorConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorConfig') }})
    boot_disk_size_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootDiskSizeGb') }})
    boot_disk_type: Optional[InstanceBootDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootDiskType') }})
    can_ip_forward: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canIpForward') }})
    container_image: Optional[ContainerImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerImage') }})
    custom_gpu_driver_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customGpuDriverPath') }})
    data_disk_size_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDiskSizeGb') }})
    data_disk_type: Optional[InstanceDataDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDiskType') }})
    disk_encryption: Optional[InstanceDiskEncryptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskEncryption') }})
    install_gpu_driver: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installGpuDriver') }})
    instance_owners: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceOwners') }})
    kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKey') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    nic_type: Optional[InstanceNicTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nicType') }})
    no_proxy_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noProxyAccess') }})
    no_public_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noPublicIp') }})
    no_remove_data_disk: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noRemoveDataDisk') }})
    post_startup_script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postStartupScript') }})
    reservation_affinity: Optional[ReservationAffinity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservationAffinity') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    service_account_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountScopes') }})
    shielded_instance_config: Optional[ShieldedInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shieldedInstanceConfig') }})
    subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    upgrade_history: Optional[List[UpgradeHistoryEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeHistory') }})
    vm_image: Optional[VMImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmImage') }})
    
