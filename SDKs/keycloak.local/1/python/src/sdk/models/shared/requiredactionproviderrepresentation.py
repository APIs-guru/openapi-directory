from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RequiredActionProviderRepresentation:
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    default_action: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultAction' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerId' }})
    
