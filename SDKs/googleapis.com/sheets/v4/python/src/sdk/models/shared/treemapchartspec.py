from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TreemapChartSpec:
    r"""TreemapChartSpec
    A Treemap chart.
    """
    
    color_data: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorData') }})
    color_scale: Optional[TreemapChartColorScale] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorScale') }})
    header_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headerColor') }})
    header_color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headerColorStyle') }})
    hide_tooltips: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hideTooltips') }})
    hinted_levels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hintedLevels') }})
    labels: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    levels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('levels') }})
    max_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxValue') }})
    min_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minValue') }})
    parent_labels: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentLabels') }})
    size_data: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeData') }})
    text_format: Optional[TextFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textFormat') }})
    
