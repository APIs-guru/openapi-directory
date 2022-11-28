from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TableBorderPropertiesDashStyleEnum(str, Enum):
    DASH_STYLE_UNSPECIFIED = "DASH_STYLE_UNSPECIFIED"
    SOLID = "SOLID"
    DOT = "DOT"
    DASH = "DASH"
    DASH_DOT = "DASH_DOT"
    LONG_DASH = "LONG_DASH"
    LONG_DASH_DOT = "LONG_DASH_DOT"


@dataclass_json
@dataclass
class TableBorderProperties:
    r"""TableBorderProperties
    The border styling properties of the TableBorderCell.
    """
    
    dash_style: Optional[TableBorderPropertiesDashStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashStyle') }})
    table_border_fill: Optional[TableBorderFill] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableBorderFill') }})
    weight: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
