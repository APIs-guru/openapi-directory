from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ParagraphBorderDashStyleEnum(str, Enum):
    DASH_STYLE_UNSPECIFIED = "DASH_STYLE_UNSPECIFIED"
    SOLID = "SOLID"
    DOT = "DOT"
    DASH = "DASH"


@dataclass_json
@dataclass
class ParagraphBorder:
    r"""ParagraphBorder
    A border around a paragraph.
    """
    
    color: Optional[OptionalColor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    dash_style: Optional[ParagraphBorderDashStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashStyle') }})
    padding: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('padding') }})
    width: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
