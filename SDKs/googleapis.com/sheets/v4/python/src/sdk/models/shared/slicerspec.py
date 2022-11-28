from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SlicerSpecHorizontalAlignmentEnum(str, Enum):
    HORIZONTAL_ALIGN_UNSPECIFIED = "HORIZONTAL_ALIGN_UNSPECIFIED"
    LEFT = "LEFT"
    CENTER = "CENTER"
    RIGHT = "RIGHT"


@dataclass_json
@dataclass
class SlicerSpec:
    r"""SlicerSpec
    The specifications of a slicer.
    """
    
    apply_to_pivot_tables: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyToPivotTables') }})
    background_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColor') }})
    background_color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColorStyle') }})
    column_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnIndex') }})
    data_range: Optional[GridRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataRange') }})
    filter_criteria: Optional[FilterCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterCriteria') }})
    horizontal_alignment: Optional[SlicerSpecHorizontalAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('horizontalAlignment') }})
    text_format: Optional[TextFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textFormat') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
