from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import appliedlicense
from . import computescheduling
from . import networkinterface

class TargetVMDetailsBootOptionEnum(str, Enum):
    BOOT_OPTION_UNSPECIFIED = "BOOT_OPTION_UNSPECIFIED"
    EFI = "EFI"
    BIOS = "BIOS"

class TargetVMDetailsDiskTypeEnum(str, Enum):
    DISK_TYPE_UNSPECIFIED = "DISK_TYPE_UNSPECIFIED"
    STANDARD = "STANDARD"
    BALANCED = "BALANCED"
    SSD = "SSD"

class TargetVMDetailsLicenseTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    PAYG = "PAYG"
    BYOL = "BYOL"


@dataclass_json
@dataclass
class TargetVMDetails:
    applied_license: Optional[appliedlicense.AppliedLicense] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedLicense' }})
    boot_option: Optional[TargetVMDetailsBootOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootOption' }})
    compute_scheduling: Optional[computescheduling.ComputeScheduling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeScheduling' }})
    disk_type: Optional[TargetVMDetailsDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskType' }})
    external_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalIp' }})
    internal_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalIp' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    license_type: Optional[TargetVMDetailsLicenseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenseType' }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineType' }})
    machine_type_series: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineTypeSeries' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    network_interfaces: Optional[List[networkinterface.NetworkInterface]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkInterfaces' }})
    network_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkTags' }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    secure_boot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secureBoot' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetwork' }})
    target_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetProject' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
