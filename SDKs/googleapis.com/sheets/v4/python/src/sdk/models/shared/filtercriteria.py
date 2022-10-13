from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import booleancondition
from . import color
from . import colorstyle
from . import color
from . import colorstyle


@dataclass_json
@dataclass
class FilterCriteria:
    condition: Optional[booleancondition.BooleanCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    hidden_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiddenValues' }})
    visible_background_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibleBackgroundColor' }})
    visible_background_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibleBackgroundColorStyle' }})
    visible_foreground_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibleForegroundColor' }})
    visible_foreground_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibleForegroundColorStyle' }})
    
