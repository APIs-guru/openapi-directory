from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SheetPropertiesSheetTypeEnum(str, Enum):
    SHEET_TYPE_UNSPECIFIED = "SHEET_TYPE_UNSPECIFIED"
    GRID = "GRID"
    OBJECT = "OBJECT"
    DATA_SOURCE = "DATA_SOURCE"


@dataclass_json
@dataclass
class SheetProperties:
    r"""SheetProperties
    Properties of a sheet.
    """
    
    data_source_sheet_properties: Optional[DataSourceSheetProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceSheetProperties') }})
    grid_properties: Optional[GridProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gridProperties') }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hidden') }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    right_to_left: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rightToLeft') }})
    sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetId') }})
    sheet_type: Optional[SheetPropertiesSheetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetType') }})
    tab_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tabColor') }})
    tab_color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tabColorStyle') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
