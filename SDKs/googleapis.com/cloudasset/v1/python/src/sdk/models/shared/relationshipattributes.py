from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RelationshipAttributes:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    source_resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceResourceType' }})
    target_resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetResourceType' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
