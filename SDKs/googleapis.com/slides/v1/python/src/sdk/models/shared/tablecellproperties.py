from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TableCellPropertiesContentAlignmentEnum(str, Enum):
    CONTENT_ALIGNMENT_UNSPECIFIED = "CONTENT_ALIGNMENT_UNSPECIFIED"
    CONTENT_ALIGNMENT_UNSUPPORTED = "CONTENT_ALIGNMENT_UNSUPPORTED"
    TOP = "TOP"
    MIDDLE = "MIDDLE"
    BOTTOM = "BOTTOM"


@dataclass_json
@dataclass
class TableCellProperties:
    r"""TableCellProperties
    The properties of the TableCell.
    """
    
    content_alignment: Optional[TableCellPropertiesContentAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentAlignment') }})
    table_cell_background_fill: Optional[TableCellBackgroundFill] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableCellBackgroundFill') }})
    
