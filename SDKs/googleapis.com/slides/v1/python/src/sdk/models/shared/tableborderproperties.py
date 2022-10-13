from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tableborderfill
from . import dimension

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
    dash_style: Optional[TableBorderPropertiesDashStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashStyle' }})
    table_border_fill: Optional[tableborderfill.TableBorderFill] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableBorderFill' }})
    weight: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    
