from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datasourcesheetproperties
from . import gridproperties
from . import color
from . import colorstyle

class SheetPropertiesSheetTypeEnum(str, Enum):
    SHEET_TYPE_UNSPECIFIED = "SHEET_TYPE_UNSPECIFIED"
    GRID = "GRID"
    OBJECT = "OBJECT"
    DATA_SOURCE = "DATA_SOURCE"


@dataclass_json
@dataclass
class SheetProperties:
    data_source_sheet_properties: Optional[datasourcesheetproperties.DataSourceSheetProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceSheetProperties' }})
    grid_properties: Optional[gridproperties.GridProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gridProperties' }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hidden' }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    right_to_left: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rightToLeft' }})
    sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheetId' }})
    sheet_type: Optional[SheetPropertiesSheetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheetType' }})
    tab_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tabColor' }})
    tab_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tabColorStyle' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
