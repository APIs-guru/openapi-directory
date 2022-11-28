from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TableCellBorderDashStyleEnum(str, Enum):
    DASH_STYLE_UNSPECIFIED = "DASH_STYLE_UNSPECIFIED"
    SOLID = "SOLID"
    DOT = "DOT"
    DASH = "DASH"


@dataclass_json
@dataclass
class TableCellBorder:
    r"""TableCellBorder
    A border around a table cell. Table cell borders cannot be transparent. To hide a table cell border, make its width 0.
    """
    
    color: Optional[OptionalColor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    dash_style: Optional[TableCellBorderDashStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashStyle') }})
    width: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
