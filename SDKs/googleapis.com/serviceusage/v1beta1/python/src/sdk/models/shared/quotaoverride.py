from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QuotaOverride:
    admin_override_ancestor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminOverrideAncestor' }})
    dimensions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    metric: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    override_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrideValue' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    
