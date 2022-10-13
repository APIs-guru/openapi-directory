from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import appliedlicense
from . import computescheduling
from . import networkinterface

class ComputeEngineTargetDefaultsBootOptionEnum(str, Enum):
    COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED = "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED"
    COMPUTE_ENGINE_BOOT_OPTION_EFI = "COMPUTE_ENGINE_BOOT_OPTION_EFI"
    COMPUTE_ENGINE_BOOT_OPTION_BIOS = "COMPUTE_ENGINE_BOOT_OPTION_BIOS"

class ComputeEngineTargetDefaultsDiskTypeEnum(str, Enum):
    COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED = "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED"
    COMPUTE_ENGINE_DISK_TYPE_STANDARD = "COMPUTE_ENGINE_DISK_TYPE_STANDARD"
    COMPUTE_ENGINE_DISK_TYPE_SSD = "COMPUTE_ENGINE_DISK_TYPE_SSD"
    COMPUTE_ENGINE_DISK_TYPE_BALANCED = "COMPUTE_ENGINE_DISK_TYPE_BALANCED"

class ComputeEngineTargetDefaultsLicenseTypeEnum(str, Enum):
    COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT = "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT"
    COMPUTE_ENGINE_LICENSE_TYPE_PAYG = "COMPUTE_ENGINE_LICENSE_TYPE_PAYG"
    COMPUTE_ENGINE_LICENSE_TYPE_BYOL = "COMPUTE_ENGINE_LICENSE_TYPE_BYOL"


@dataclass_json
@dataclass
class ComputeEngineTargetDefaults:
    additional_licenses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalLicenses' }})
    applied_license: Optional[appliedlicense.AppliedLicense] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedLicense' }})
    boot_option: Optional[ComputeEngineTargetDefaultsBootOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootOption' }})
    compute_scheduling: Optional[computescheduling.ComputeScheduling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeScheduling' }})
    disk_type: Optional[ComputeEngineTargetDefaultsDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskType' }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    license_type: Optional[ComputeEngineTargetDefaultsLicenseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenseType' }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineType' }})
    machine_type_series: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineTypeSeries' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    network_interfaces: Optional[List[networkinterface.NetworkInterface]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkInterfaces' }})
    network_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkTags' }})
    secure_boot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secureBoot' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    target_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetProject' }})
    vm_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmName' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
