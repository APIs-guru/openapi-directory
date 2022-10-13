from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pageproperties


@dataclass_json
@dataclass
class UpdatePagePropertiesRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    page_properties: Optional[pageproperties.PageProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageProperties' }})
    
