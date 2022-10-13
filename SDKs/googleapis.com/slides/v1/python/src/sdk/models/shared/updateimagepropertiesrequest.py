from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import imageproperties


@dataclass_json
@dataclass
class UpdateImagePropertiesRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    image_properties: Optional[imageproperties.ImageProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageProperties' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    
