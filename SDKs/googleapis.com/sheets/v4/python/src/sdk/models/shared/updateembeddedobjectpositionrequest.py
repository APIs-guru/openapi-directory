from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import embeddedobjectposition


@dataclass_json
@dataclass
class UpdateEmbeddedObjectPositionRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    new_position: Optional[embeddedobjectposition.EmbeddedObjectPosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newPosition' }})
    object_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    
