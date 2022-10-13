from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DiagnosticKindEnum(str, Enum):
    WARNING = "WARNING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class Diagnostic:
    kind: Optional[DiagnosticKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
