from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import embeddedobjectborder


@dataclass_json
@dataclass
class UpdateEmbeddedObjectBorderRequest:
    border: Optional[embeddedobjectborder.EmbeddedObjectBorder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'border' }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    object_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    
