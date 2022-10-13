from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import solidfill

class TableCellBackgroundFillPropertyStateEnum(str, Enum):
    RENDERED = "RENDERED"
    NOT_RENDERED = "NOT_RENDERED"
    INHERIT = "INHERIT"


@dataclass_json
@dataclass
class TableCellBackgroundFill:
    property_state: Optional[TableCellBackgroundFillPropertyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyState' }})
    solid_fill: Optional[solidfill.SolidFill] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solidFill' }})
    
