from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Recipe:
    arguments: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arguments' }})
    defined_in_material: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definedInMaterial' }})
    entry_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryPoint' }})
    environment: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
