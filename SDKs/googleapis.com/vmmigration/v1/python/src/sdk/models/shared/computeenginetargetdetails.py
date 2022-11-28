from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ComputeEngineTargetDetailsBootOptionEnum(str, Enum):
    COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED = "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED"
    COMPUTE_ENGINE_BOOT_OPTION_EFI = "COMPUTE_ENGINE_BOOT_OPTION_EFI"
    COMPUTE_ENGINE_BOOT_OPTION_BIOS = "COMPUTE_ENGINE_BOOT_OPTION_BIOS"

class ComputeEngineTargetDetailsDiskTypeEnum(str, Enum):
    COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED = "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED"
    COMPUTE_ENGINE_DISK_TYPE_STANDARD = "COMPUTE_ENGINE_DISK_TYPE_STANDARD"
    COMPUTE_ENGINE_DISK_TYPE_SSD = "COMPUTE_ENGINE_DISK_TYPE_SSD"
    COMPUTE_ENGINE_DISK_TYPE_BALANCED = "COMPUTE_ENGINE_DISK_TYPE_BALANCED"

class ComputeEngineTargetDetailsLicenseTypeEnum(str, Enum):
    COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT = "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT"
    COMPUTE_ENGINE_LICENSE_TYPE_PAYG = "COMPUTE_ENGINE_LICENSE_TYPE_PAYG"
    COMPUTE_ENGINE_LICENSE_TYPE_BYOL = "COMPUTE_ENGINE_LICENSE_TYPE_BYOL"


@dataclass_json
@dataclass
class ComputeEngineTargetDetails:
    r"""ComputeEngineTargetDetails
    ComputeEngineTargetDetails is a collection of details for creating a VM in a target Compute Engine project.
    """
    
    additional_licenses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalLicenses') }})
    applied_license: Optional[AppliedLicense] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedLicense') }})
    boot_option: Optional[ComputeEngineTargetDetailsBootOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootOption') }})
    compute_scheduling: Optional[ComputeScheduling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeScheduling') }})
    disk_type: Optional[ComputeEngineTargetDetailsDiskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskType') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    license_type: Optional[ComputeEngineTargetDetailsLicenseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseType') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    machine_type_series: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineTypeSeries') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    network_interfaces: Optional[List[NetworkInterface]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterfaces') }})
    network_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTags') }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    secure_boot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secureBoot') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    vm_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmName') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
