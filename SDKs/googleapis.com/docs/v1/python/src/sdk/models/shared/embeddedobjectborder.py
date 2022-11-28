from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EmbeddedObjectBorderDashStyleEnum(str, Enum):
    DASH_STYLE_UNSPECIFIED = "DASH_STYLE_UNSPECIFIED"
    SOLID = "SOLID"
    DOT = "DOT"
    DASH = "DASH"

class EmbeddedObjectBorderPropertyStateEnum(str, Enum):
    RENDERED = "RENDERED"
    NOT_RENDERED = "NOT_RENDERED"


@dataclass_json
@dataclass
class EmbeddedObjectBorder:
    r"""EmbeddedObjectBorder
    A border around an EmbeddedObject.
    """
    
    color: Optional[OptionalColor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    dash_style: Optional[EmbeddedObjectBorderDashStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashStyle') }})
    property_state: Optional[EmbeddedObjectBorderPropertyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyState') }})
    width: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
