from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import resource

class FixableTotalByDigestSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    MINIMAL = "MINIMAL"
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"


@dataclass_json
@dataclass
class FixableTotalByDigest:
    fixable_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixableCount' }})
    resource: Optional[resource.Resource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    severity: Optional[FixableTotalByDigestSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    total_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCount' }})
    
