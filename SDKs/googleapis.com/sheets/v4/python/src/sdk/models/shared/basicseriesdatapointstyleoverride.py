from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import color
from . import colorstyle
from . import pointstyle


@dataclass_json
@dataclass
class BasicSeriesDataPointStyleOverride:
    color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorStyle' }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    point_style: Optional[pointstyle.PointStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pointStyle' }})
    
