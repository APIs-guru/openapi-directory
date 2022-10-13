from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CheckInResponse:
    deadline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deadline' }})
    features: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    
