from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BasicChartAxisPositionEnum(str, Enum):
    BASIC_CHART_AXIS_POSITION_UNSPECIFIED = "BASIC_CHART_AXIS_POSITION_UNSPECIFIED"
    BOTTOM_AXIS = "BOTTOM_AXIS"
    LEFT_AXIS = "LEFT_AXIS"
    RIGHT_AXIS = "RIGHT_AXIS"


@dataclass_json
@dataclass
class BasicChartAxis:
    r"""BasicChartAxis
    An axis of the chart. A chart may not have more than one axis per axis position.
    """
    
    format: Optional[TextFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    position: Optional[BasicChartAxisPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    title_text_position: Optional[TextPosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('titleTextPosition') }})
    view_window_options: Optional[ChartAxisViewWindowOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewWindowOptions') }})
    
