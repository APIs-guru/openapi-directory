from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PlaceholderTypeEnum(str, Enum):
    NONE = "NONE"
    BODY = "BODY"
    CHART = "CHART"
    CLIP_ART = "CLIP_ART"
    CENTERED_TITLE = "CENTERED_TITLE"
    DIAGRAM = "DIAGRAM"
    DATE_AND_TIME = "DATE_AND_TIME"
    FOOTER = "FOOTER"
    HEADER = "HEADER"
    MEDIA = "MEDIA"
    OBJECT = "OBJECT"
    PICTURE = "PICTURE"
    SLIDE_NUMBER = "SLIDE_NUMBER"
    SUBTITLE = "SUBTITLE"
    TABLE = "TABLE"
    TITLE = "TITLE"
    SLIDE_IMAGE = "SLIDE_IMAGE"


@dataclass_json
@dataclass
class Placeholder:
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    parent_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentObjectId' }})
    type: Optional[PlaceholderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
