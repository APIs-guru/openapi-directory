from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PackageIssueEffectiveSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    MINIMAL = "MINIMAL"
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"


@dataclass_json
@dataclass
class PackageIssueInput:
    r"""PackageIssueInput
    A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available).
    """
    
    affected_cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedCpeUri') }})
    affected_package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedPackage') }})
    affected_version: Optional[Version] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedVersion') }})
    file_location: Optional[List[GrafeasV1FileLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileLocation') }})
    fix_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixAvailable') }})
    fixed_cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedCpeUri') }})
    fixed_package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedPackage') }})
    fixed_version: Optional[Version] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedVersion') }})
    package_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageType') }})
    

@dataclass_json
@dataclass
class PackageIssue:
    r"""PackageIssue
    A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available).
    """
    
    affected_cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedCpeUri') }})
    affected_package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedPackage') }})
    affected_version: Optional[Version] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedVersion') }})
    effective_severity: Optional[PackageIssueEffectiveSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveSeverity') }})
    file_location: Optional[List[GrafeasV1FileLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileLocation') }})
    fix_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixAvailable') }})
    fixed_cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedCpeUri') }})
    fixed_package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedPackage') }})
    fixed_version: Optional[Version] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedVersion') }})
    package_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageType') }})
    
