from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import shapeproperties


@dataclass_json
@dataclass
class UpdateShapePropertiesRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    shape_properties: Optional[shapeproperties.ShapeProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shapeProperties' }})
    
