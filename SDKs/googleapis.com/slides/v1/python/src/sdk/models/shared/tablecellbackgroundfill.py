from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TableCellBackgroundFillPropertyStateEnum(str, Enum):
    RENDERED = "RENDERED"
    NOT_RENDERED = "NOT_RENDERED"
    INHERIT = "INHERIT"


@dataclass_json
@dataclass
class TableCellBackgroundFill:
    r"""TableCellBackgroundFill
    The table cell background fill.
    """
    
    property_state: Optional[TableCellBackgroundFillPropertyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyState') }})
    solid_fill: Optional[SolidFill] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solidFill') }})
    
