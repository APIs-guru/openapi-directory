from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class TargetVMDetailsInput:
    r"""TargetVMDetailsInput
    TargetVMDetails is a collection of details for creating a VM in a target Compute Engine project.
    """
    
    applied_license: Optional[AppliedLicense] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedLicense') }})
    compute_scheduling: Optional[ComputeScheduling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeScheduling') }})
    disk_type: Optional[TargetVMDetailsDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskType') }})
    external_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalIp') }})
    internal_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalIp') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    license_type: Optional[TargetVMDetailsLicenseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseType') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    machine_type_series: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineTypeSeries') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    network_interfaces: Optional[List[NetworkInterface]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterfaces') }})
    network_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTags') }})
    secure_boot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secureBoot') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetwork') }})
    target_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetProject') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    

@dataclass_json
@dataclass
class TargetVMDetails:
    r"""TargetVMDetails
    TargetVMDetails is a collection of details for creating a VM in a target Compute Engine project.
    """
    
    applied_license: Optional[AppliedLicense] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedLicense') }})
    boot_option: Optional[TargetVMDetailsBootOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootOption') }})
    compute_scheduling: Optional[ComputeScheduling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeScheduling') }})
    disk_type: Optional[TargetVMDetailsDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskType') }})
    external_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalIp') }})
    internal_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalIp') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    license_type: Optional[TargetVMDetailsLicenseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseType') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    machine_type_series: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineTypeSeries') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    network_interfaces: Optional[List[NetworkInterface]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterfaces') }})
    network_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTags') }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    secure_boot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secureBoot') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetwork') }})
    target_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetProject') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
