from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ShapeBackgroundFillPropertyStateEnum(str, Enum):
    RENDERED = "RENDERED"
    NOT_RENDERED = "NOT_RENDERED"
    INHERIT = "INHERIT"


@dataclass_json
@dataclass
class ShapeBackgroundFill:
    r"""ShapeBackgroundFill
    The shape background fill.
    """
    
    property_state: Optional[ShapeBackgroundFillPropertyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyState') }})
    solid_fill: Optional[SolidFill] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solidFill') }})
    
