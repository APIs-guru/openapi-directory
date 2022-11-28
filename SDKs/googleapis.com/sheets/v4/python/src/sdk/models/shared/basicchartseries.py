from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BasicChartSeriesTargetAxisEnum(str, Enum):
    BASIC_CHART_AXIS_POSITION_UNSPECIFIED = "BASIC_CHART_AXIS_POSITION_UNSPECIFIED"
    BOTTOM_AXIS = "BOTTOM_AXIS"
    LEFT_AXIS = "LEFT_AXIS"
    RIGHT_AXIS = "RIGHT_AXIS"

class BasicChartSeriesTypeEnum(str, Enum):
    BASIC_CHART_TYPE_UNSPECIFIED = "BASIC_CHART_TYPE_UNSPECIFIED"
    BAR = "BAR"
    LINE = "LINE"
    AREA = "AREA"
    COLUMN = "COLUMN"
    SCATTER = "SCATTER"
    COMBO = "COMBO"
    STEPPED_AREA = "STEPPED_AREA"


@dataclass_json
@dataclass
class BasicChartSeries:
    r"""BasicChartSeries
    A single series of data in a chart. For example, if charting stock prices over time, multiple series may exist, one for the \"Open Price\", \"High Price\", \"Low Price\" and \"Close Price\".
    """
    
    color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorStyle') }})
    data_label: Optional[DataLabel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataLabel') }})
    line_style: Optional[LineStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineStyle') }})
    point_style: Optional[PointStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointStyle') }})
    series: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('series') }})
    style_overrides: Optional[List[BasicSeriesDataPointStyleOverride]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('styleOverrides') }})
    target_axis: Optional[BasicChartSeriesTargetAxisEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetAxis') }})
    type: Optional[BasicChartSeriesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
