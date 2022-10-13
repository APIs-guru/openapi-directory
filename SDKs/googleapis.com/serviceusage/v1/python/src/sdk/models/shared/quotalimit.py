from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QuotaLimit:
    default_limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLimit' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    free_tier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeTier' }})
    max_limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxLimit' }})
    metric: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    values: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
