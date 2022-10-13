from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import multivaluedhashmap


@dataclass_json
@dataclass
class ComponentRepresentation:
    config: Optional[multivaluedhashmap.MultivaluedHashMap] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentId' }})
    provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerId' }})
    provider_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerType' }})
    sub_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subType' }})
    
