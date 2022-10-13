from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import lineproperties


@dataclass_json
@dataclass
class UpdateLinePropertiesRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    line_properties: Optional[lineproperties.LineProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineProperties' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    
