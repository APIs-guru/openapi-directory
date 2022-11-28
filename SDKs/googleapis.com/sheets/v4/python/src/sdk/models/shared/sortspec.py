from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SortSpecSortOrderEnum(str, Enum):
    SORT_ORDER_UNSPECIFIED = "SORT_ORDER_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclass
class SortSpec:
    r"""SortSpec
    A sort order associated with a specific column or row.
    """
    
    background_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColor') }})
    background_color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColorStyle') }})
    data_source_column_reference: Optional[DataSourceColumnReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceColumnReference') }})
    dimension_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionIndex') }})
    foreground_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foregroundColor') }})
    foreground_color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foregroundColorStyle') }})
    sort_order: Optional[SortSpecSortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    
