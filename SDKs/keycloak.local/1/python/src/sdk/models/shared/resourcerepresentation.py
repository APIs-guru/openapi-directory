from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import scoperepresentation


@dataclass_json
@dataclass
class ResourceRepresentation:
    attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    icon_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon_uri' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner_managed_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerManagedAccess' }})
    scopes: Optional[List[scoperepresentation.ScopeRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uris' }})
    
