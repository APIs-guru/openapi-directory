from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NestedTenantGroup:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    tenant_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant_count' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
