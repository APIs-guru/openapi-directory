from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import solidfill
from . import stretchedpicturefill

class PageBackgroundFillPropertyStateEnum(str, Enum):
    RENDERED = "RENDERED"
    NOT_RENDERED = "NOT_RENDERED"
    INHERIT = "INHERIT"


@dataclass_json
@dataclass
class PageBackgroundFill:
    property_state: Optional[PageBackgroundFillPropertyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyState' }})
    solid_fill: Optional[solidfill.SolidFill] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solidFill' }})
    stretched_picture_fill: Optional[stretchedpicturefill.StretchedPictureFill] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stretchedPictureFill' }})
    
