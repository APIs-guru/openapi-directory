from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import grouprepresentation


@dataclass_json
@dataclass
class GroupRepresentation:
    access: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    client_roles: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRoles' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    realm_roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'realmRoles' }})
    sub_groups: Optional[List[grouprepresentation.GroupRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subGroups' }})
    
