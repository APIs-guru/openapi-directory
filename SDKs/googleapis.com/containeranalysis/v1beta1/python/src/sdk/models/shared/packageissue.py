from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import vulnerabilitylocation
from . import vulnerabilitylocation

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
    affected_location: Optional[vulnerabilitylocation.VulnerabilityLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'affectedLocation' }})
    effective_severity: Optional[PackageIssueEffectiveSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveSeverity' }})
    fixed_location: Optional[vulnerabilitylocation.VulnerabilityLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedLocation' }})
    package_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageType' }})
    severity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severityName' }})
    
