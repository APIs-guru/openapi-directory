from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InfoResponse:
    bbox: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bbox' }})
    features: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
