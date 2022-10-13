from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WritableConfigContext:
    cluster_groups: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster_groups' }})
    clusters: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusters' }})
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_active' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    platforms: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platforms' }})
    regions: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    roles: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    sites: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sites' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tenant_groups: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant_groups' }})
    tenants: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenants' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    
