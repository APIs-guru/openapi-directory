from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import color
from . import colorstyle
from . import datalabel
from . import linestyle
from . import pointstyle
from . import chartdata
from . import basicseriesdatapointstyleoverride

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
    color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorStyle' }})
    data_label: Optional[datalabel.DataLabel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataLabel' }})
    line_style: Optional[linestyle.LineStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineStyle' }})
    point_style: Optional[pointstyle.PointStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pointStyle' }})
    series: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'series' }})
    style_overrides: Optional[List[basicseriesdatapointstyleoverride.BasicSeriesDataPointStyleOverride]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'styleOverrides' }})
    target_axis: Optional[BasicChartSeriesTargetAxisEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetAxis' }})
    type: Optional[BasicChartSeriesTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
