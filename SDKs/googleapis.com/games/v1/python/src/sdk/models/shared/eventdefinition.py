from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import eventchild

class EventDefinitionVisibilityEnum(str, Enum):
    EVENT_VISIBILITY_UNSPECIFIED = "EVENT_VISIBILITY_UNSPECIFIED"
    REVEALED = "REVEALED"
    HIDDEN = "HIDDEN"


@dataclass_json
@dataclass
class EventDefinition:
    child_events: Optional[List[eventchild.EventChild]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childEvents' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUrl' }})
    is_default_image_url: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDefaultImageUrl' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    visibility: Optional[EventDefinitionVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    
