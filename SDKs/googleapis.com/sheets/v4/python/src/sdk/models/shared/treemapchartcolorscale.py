from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import color
from . import colorstyle
from . import color
from . import colorstyle
from . import color
from . import colorstyle
from . import color
from . import colorstyle


@dataclass_json
@dataclass
class TreemapChartColorScale:
    max_value_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxValueColor' }})
    max_value_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxValueColorStyle' }})
    mid_value_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'midValueColor' }})
    mid_value_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'midValueColorStyle' }})
    min_value_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minValueColor' }})
    min_value_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minValueColorStyle' }})
    no_data_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noDataColor' }})
    no_data_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noDataColorStyle' }})
    
