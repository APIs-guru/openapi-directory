from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OutlineDashStyleEnum(str, Enum):
    DASH_STYLE_UNSPECIFIED = "DASH_STYLE_UNSPECIFIED"
    SOLID = "SOLID"
    DOT = "DOT"
    DASH = "DASH"
    DASH_DOT = "DASH_DOT"
    LONG_DASH = "LONG_DASH"
    LONG_DASH_DOT = "LONG_DASH_DOT"

class OutlinePropertyStateEnum(str, Enum):
    RENDERED = "RENDERED"
    NOT_RENDERED = "NOT_RENDERED"
    INHERIT = "INHERIT"


@dataclass_json
@dataclass
class Outline:
    r"""Outline
    The outline of a PageElement. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.
    """
    
    dash_style: Optional[OutlineDashStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashStyle') }})
    outline_fill: Optional[OutlineFill] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outlineFill') }})
    property_state: Optional[OutlinePropertyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyState') }})
    weight: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
