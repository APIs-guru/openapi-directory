from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sourceposition

class IssueSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    DEPRECATION = "DEPRECATION"
    WARNING = "WARNING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class Issue:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    severity: Optional[IssueSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    source_position: Optional[sourceposition.SourcePosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourcePosition' }})
    
