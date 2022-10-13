from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tableborderproperties
from . import tablerange

class UpdateTableBorderPropertiesRequestBorderPositionEnum(str, Enum):
    ALL = "ALL"
    BOTTOM = "BOTTOM"
    INNER = "INNER"
    INNER_HORIZONTAL = "INNER_HORIZONTAL"
    INNER_VERTICAL = "INNER_VERTICAL"
    LEFT = "LEFT"
    OUTER = "OUTER"
    RIGHT = "RIGHT"
    TOP = "TOP"


@dataclass_json
@dataclass
class UpdateTableBorderPropertiesRequest:
    border_position: Optional[UpdateTableBorderPropertiesRequestBorderPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderPosition' }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    table_border_properties: Optional[tableborderproperties.TableBorderProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableBorderProperties' }})
    table_range: Optional[tablerange.TableRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableRange' }})
    
