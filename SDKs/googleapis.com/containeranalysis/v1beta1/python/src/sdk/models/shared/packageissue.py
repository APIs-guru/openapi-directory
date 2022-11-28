from dataclasses import dataclass, field
from typing import Optional
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
    This message wraps a location affected by a vulnerability and its associated fix (if one is available).
    """
    
    affected_location: Optional[VulnerabilityLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedLocation') }})
    fixed_location: Optional[VulnerabilityLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedLocation') }})
    package_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageType') }})
    severity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severityName') }})
    

@dataclass_json
@dataclass
class PackageIssue:
    r"""PackageIssue
    This message wraps a location affected by a vulnerability and its associated fix (if one is available).
    """
    
    affected_location: Optional[VulnerabilityLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedLocation') }})
    effective_severity: Optional[PackageIssueEffectiveSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveSeverity') }})
    fixed_location: Optional[VulnerabilityLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedLocation') }})
    package_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageType') }})
    severity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severityName') }})
    
