from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import color
from . import colorstyle
from . import datasourcecolumnreference
from . import color
from . import colorstyle

class SortSpecSortOrderEnum(str, Enum):
    SORT_ORDER_UNSPECIFIED = "SORT_ORDER_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclass
class SortSpec:
    background_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundColor' }})
    background_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundColorStyle' }})
    data_source_column_reference: Optional[datasourcecolumnreference.DataSourceColumnReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceColumnReference' }})
    dimension_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionIndex' }})
    foreground_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'foregroundColor' }})
    foreground_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'foregroundColorStyle' }})
    sort_order: Optional[SortSpecSortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    
