from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nestedsite


@dataclass_json
@dataclass
class VlanGroup:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    site: Optional[nestedsite.NestedSite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    vlan_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan_count' }})
    
