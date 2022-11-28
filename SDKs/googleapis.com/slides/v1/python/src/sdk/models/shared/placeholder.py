from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""Placeholder
    The placeholder information that uniquely identifies a placeholder shape.
    """
    
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    parent_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentObjectId') }})
    type: Optional[PlaceholderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
