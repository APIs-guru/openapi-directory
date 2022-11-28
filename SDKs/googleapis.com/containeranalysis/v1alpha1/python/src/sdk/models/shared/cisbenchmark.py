from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CisBenchmarkSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    MINIMAL = "MINIMAL"
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"


@dataclass_json
@dataclass
class CisBenchmark:
    r"""CisBenchmark
    A compliance check that is a CIS benchmark.
    """
    
    profile_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileLevel') }})
    severity: Optional[CisBenchmarkSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    
