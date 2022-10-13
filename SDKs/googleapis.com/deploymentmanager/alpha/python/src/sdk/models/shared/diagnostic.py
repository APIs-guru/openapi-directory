from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DiagnosticLevelEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    INFORMATION = "INFORMATION"
    WARNING = "WARNING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class Diagnostic:
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    level: Optional[DiagnosticLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    
