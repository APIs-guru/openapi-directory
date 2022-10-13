from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import basicchartaxis
from . import basicchartdomain
from . import basicchartseries
from . import datalabel

class BasicChartSpecChartTypeEnum(str, Enum):
    BASIC_CHART_TYPE_UNSPECIFIED = "BASIC_CHART_TYPE_UNSPECIFIED"
    BAR = "BAR"
    LINE = "LINE"
    AREA = "AREA"
    COLUMN = "COLUMN"
    SCATTER = "SCATTER"
    COMBO = "COMBO"
    STEPPED_AREA = "STEPPED_AREA"

class BasicChartSpecCompareModeEnum(str, Enum):
    BASIC_CHART_COMPARE_MODE_UNSPECIFIED = "BASIC_CHART_COMPARE_MODE_UNSPECIFIED"
    DATUM = "DATUM"
    CATEGORY = "CATEGORY"

class BasicChartSpecLegendPositionEnum(str, Enum):
    BASIC_CHART_LEGEND_POSITION_UNSPECIFIED = "BASIC_CHART_LEGEND_POSITION_UNSPECIFIED"
    BOTTOM_LEGEND = "BOTTOM_LEGEND"
    LEFT_LEGEND = "LEFT_LEGEND"
    RIGHT_LEGEND = "RIGHT_LEGEND"
    TOP_LEGEND = "TOP_LEGEND"
    NO_LEGEND = "NO_LEGEND"

class BasicChartSpecStackedTypeEnum(str, Enum):
    BASIC_CHART_STACKED_TYPE_UNSPECIFIED = "BASIC_CHART_STACKED_TYPE_UNSPECIFIED"
    NOT_STACKED = "NOT_STACKED"
    STACKED = "STACKED"
    PERCENT_STACKED = "PERCENT_STACKED"


@dataclass_json
@dataclass
class BasicChartSpec:
    axis: Optional[List[basicchartaxis.BasicChartAxis]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'axis' }})
    chart_type: Optional[BasicChartSpecChartTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chartType' }})
    compare_mode: Optional[BasicChartSpecCompareModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compareMode' }})
    domains: Optional[List[basicchartdomain.BasicChartDomain]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    header_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headerCount' }})
    interpolate_nulls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interpolateNulls' }})
    legend_position: Optional[BasicChartSpecLegendPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legendPosition' }})
    line_smoothing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineSmoothing' }})
    series: Optional[List[basicchartseries.BasicChartSeries]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'series' }})
    stacked_type: Optional[BasicChartSpecStackedTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackedType' }})
    three_dimensional: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threeDimensional' }})
    total_data_label: Optional[datalabel.DataLabel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalDataLabel' }})
    
