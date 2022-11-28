from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FilterCriteria:
    r"""FilterCriteria
    Criteria for showing/hiding rows in a filter or filter view.
    """
    
    condition: Optional[BooleanCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    hidden_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiddenValues') }})
    visible_background_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibleBackgroundColor') }})
    visible_background_color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibleBackgroundColorStyle') }})
    visible_foreground_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibleForegroundColor') }})
    visible_foreground_color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibleForegroundColorStyle') }})
    
