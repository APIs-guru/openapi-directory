from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EventDefinitionVisibilityEnum(str, Enum):
    EVENT_VISIBILITY_UNSPECIFIED = "EVENT_VISIBILITY_UNSPECIFIED"
    REVEALED = "REVEALED"
    HIDDEN = "HIDDEN"


@dataclass_json
@dataclass
class EventDefinition:
    r"""EventDefinition
    An event definition resource.
    """
    
    child_events: Optional[List[EventChild]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childEvents') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    is_default_image_url: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDefaultImageUrl') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    visibility: Optional[EventDefinitionVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    
