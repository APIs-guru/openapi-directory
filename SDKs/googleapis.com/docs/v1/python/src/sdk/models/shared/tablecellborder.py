from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import optionalcolor
from . import dimension

class TableCellBorderDashStyleEnum(str, Enum):
    DASH_STYLE_UNSPECIFIED = "DASH_STYLE_UNSPECIFIED"
    SOLID = "SOLID"
    DOT = "DOT"
    DASH = "DASH"


@dataclass_json
@dataclass
class TableCellBorder:
    color: Optional[optionalcolor.OptionalColor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    dash_style: Optional[TableCellBorderDashStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashStyle' }})
    width: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
