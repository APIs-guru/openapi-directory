from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import slideproperties


@dataclass_json
@dataclass
class UpdateSlidePropertiesRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    slide_properties: Optional[slideproperties.SlideProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slideProperties' }})
    
