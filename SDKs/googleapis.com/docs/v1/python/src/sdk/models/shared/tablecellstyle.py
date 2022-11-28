from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TableCellStyleContentAlignmentEnum(str, Enum):
    CONTENT_ALIGNMENT_UNSPECIFIED = "CONTENT_ALIGNMENT_UNSPECIFIED"
    CONTENT_ALIGNMENT_UNSUPPORTED = "CONTENT_ALIGNMENT_UNSUPPORTED"
    TOP = "TOP"
    MIDDLE = "MIDDLE"
    BOTTOM = "BOTTOM"


@dataclass_json
@dataclass
class TableCellStyle:
    r"""TableCellStyle
    The style of a TableCell. Inherited table cell styles are represented as unset fields in this message. A table cell style can inherit from the table's style.
    """
    
    background_color: Optional[OptionalColor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColor') }})
    border_bottom: Optional[TableCellBorder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderBottom') }})
    border_left: Optional[TableCellBorder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderLeft') }})
    border_right: Optional[TableCellBorder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderRight') }})
    border_top: Optional[TableCellBorder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderTop') }})
    column_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnSpan') }})
    content_alignment: Optional[TableCellStyleContentAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentAlignment') }})
    padding_bottom: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paddingBottom') }})
    padding_left: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paddingLeft') }})
    padding_right: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paddingRight') }})
    padding_top: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paddingTop') }})
    row_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowSpan') }})
    
