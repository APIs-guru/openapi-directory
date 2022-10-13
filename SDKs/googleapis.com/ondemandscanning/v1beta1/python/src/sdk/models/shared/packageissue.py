from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import version
from . import grafeasv1filelocation
from . import version

class PackageIssueEffectiveSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    MINIMAL = "MINIMAL"
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"


@dataclass_json
@dataclass
class PackageIssue:
    affected_cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'affectedCpeUri' }})
    affected_package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'affectedPackage' }})
    affected_version: Optional[version.Version] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'affectedVersion' }})
    effective_severity: Optional[PackageIssueEffectiveSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveSeverity' }})
    file_location: Optional[List[grafeasv1filelocation.GrafeasV1FileLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileLocation' }})
    fix_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixAvailable' }})
    fixed_cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedCpeUri' }})
    fixed_package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedPackage' }})
    fixed_version: Optional[version.Version] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedVersion' }})
    package_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageType' }})
    
