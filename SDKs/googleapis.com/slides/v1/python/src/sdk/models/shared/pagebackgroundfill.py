from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PageBackgroundFillPropertyStateEnum(str, Enum):
    RENDERED = "RENDERED"
    NOT_RENDERED = "NOT_RENDERED"
    INHERIT = "INHERIT"


@dataclass_json
@dataclass
class PageBackgroundFill:
    r"""PageBackgroundFill
    The page background fill.
    """
    
    property_state: Optional[PageBackgroundFillPropertyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyState') }})
    solid_fill: Optional[SolidFill] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solidFill') }})
    stretched_picture_fill: Optional[StretchedPictureFill] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stretchedPictureFill') }})
    
