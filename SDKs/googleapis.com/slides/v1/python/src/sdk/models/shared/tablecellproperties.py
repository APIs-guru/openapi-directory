from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tablecellbackgroundfill

class TableCellPropertiesContentAlignmentEnum(str, Enum):
    CONTENT_ALIGNMENT_UNSPECIFIED = "CONTENT_ALIGNMENT_UNSPECIFIED"
    CONTENT_ALIGNMENT_UNSUPPORTED = "CONTENT_ALIGNMENT_UNSUPPORTED"
    TOP = "TOP"
    MIDDLE = "MIDDLE"
    BOTTOM = "BOTTOM"


@dataclass_json
@dataclass
class TableCellProperties:
    content_alignment: Optional[TableCellPropertiesContentAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentAlignment' }})
    table_cell_background_fill: Optional[tablecellbackgroundfill.TableCellBackgroundFill] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableCellBackgroundFill' }})
    
