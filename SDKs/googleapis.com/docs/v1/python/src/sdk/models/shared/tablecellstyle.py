from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import optionalcolor
from . import tablecellborder
from . import tablecellborder
from . import tablecellborder
from . import tablecellborder
from . import dimension
from . import dimension
from . import dimension
from . import dimension

class TableCellStyleContentAlignmentEnum(str, Enum):
    CONTENT_ALIGNMENT_UNSPECIFIED = "CONTENT_ALIGNMENT_UNSPECIFIED"
    CONTENT_ALIGNMENT_UNSUPPORTED = "CONTENT_ALIGNMENT_UNSUPPORTED"
    TOP = "TOP"
    MIDDLE = "MIDDLE"
    BOTTOM = "BOTTOM"


@dataclass_json
@dataclass
class TableCellStyle:
    background_color: Optional[optionalcolor.OptionalColor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundColor' }})
    border_bottom: Optional[tablecellborder.TableCellBorder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderBottom' }})
    border_left: Optional[tablecellborder.TableCellBorder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderLeft' }})
    border_right: Optional[tablecellborder.TableCellBorder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderRight' }})
    border_top: Optional[tablecellborder.TableCellBorder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderTop' }})
    column_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnSpan' }})
    content_alignment: Optional[TableCellStyleContentAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentAlignment' }})
    padding_bottom: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paddingBottom' }})
    padding_left: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paddingLeft' }})
    padding_right: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paddingRight' }})
    padding_top: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paddingTop' }})
    row_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowSpan' }})
    
