from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import color
from . import colorstyle
from . import gridrange
from . import filtercriteria
from . import textformat

class SlicerSpecHorizontalAlignmentEnum(str, Enum):
    HORIZONTAL_ALIGN_UNSPECIFIED = "HORIZONTAL_ALIGN_UNSPECIFIED"
    LEFT = "LEFT"
    CENTER = "CENTER"
    RIGHT = "RIGHT"


@dataclass_json
@dataclass
class SlicerSpec:
    apply_to_pivot_tables: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applyToPivotTables' }})
    background_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundColor' }})
    background_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundColorStyle' }})
    column_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnIndex' }})
    data_range: Optional[gridrange.GridRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataRange' }})
    filter_criteria: Optional[filtercriteria.FilterCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterCriteria' }})
    horizontal_alignment: Optional[SlicerSpecHorizontalAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'horizontalAlignment' }})
    text_format: Optional[textformat.TextFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textFormat' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
