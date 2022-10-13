from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import rolerepresentation_composites


@dataclass_json
@dataclass
class RoleRepresentation:
    attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    client_role: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRole' }})
    composite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'composite' }})
    composites: Optional[rolerepresentation_composites.RoleRepresentationComposites] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'composites' }})
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
