from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItemUpdate:
    config_request: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config_request' }})
    custom: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    location_request: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_request' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    
