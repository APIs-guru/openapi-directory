from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import textformat
from . import textposition
from . import chartaxisviewwindowoptions

class BasicChartAxisPositionEnum(str, Enum):
    BASIC_CHART_AXIS_POSITION_UNSPECIFIED = "BASIC_CHART_AXIS_POSITION_UNSPECIFIED"
    BOTTOM_AXIS = "BOTTOM_AXIS"
    LEFT_AXIS = "LEFT_AXIS"
    RIGHT_AXIS = "RIGHT_AXIS"


@dataclass_json
@dataclass
class BasicChartAxis:
    format: Optional[textformat.TextFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    position: Optional[BasicChartAxisPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    title_text_position: Optional[textposition.TextPosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'titleTextPosition' }})
    view_window_options: Optional[chartaxisviewwindowoptions.ChartAxisViewWindowOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewWindowOptions' }})
    
