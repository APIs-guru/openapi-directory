from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ChartSpecHiddenDimensionStrategyEnum(str, Enum):
    CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED = "CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED"
    SKIP_HIDDEN_ROWS_AND_COLUMNS = "SKIP_HIDDEN_ROWS_AND_COLUMNS"
    SKIP_HIDDEN_ROWS = "SKIP_HIDDEN_ROWS"
    SKIP_HIDDEN_COLUMNS = "SKIP_HIDDEN_COLUMNS"
    SHOW_ALL = "SHOW_ALL"


@dataclass_json
@dataclass
class ChartSpec:
    r"""ChartSpec
    The specifications of a chart.
    """
    
    alt_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altText') }})
    background_color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColor') }})
    background_color_style: Optional[ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColorStyle') }})
    basic_chart: Optional[BasicChartSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicChart') }})
    bubble_chart: Optional[BubbleChartSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bubbleChart') }})
    candlestick_chart: Optional[CandlestickChartSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candlestickChart') }})
    data_source_chart_properties: Optional[DataSourceChartProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceChartProperties') }})
    filter_specs: Optional[List[FilterSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterSpecs') }})
    font_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fontName') }})
    hidden_dimension_strategy: Optional[ChartSpecHiddenDimensionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiddenDimensionStrategy') }})
    histogram_chart: Optional[HistogramChartSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('histogramChart') }})
    maximized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximized') }})
    org_chart: Optional[OrgChartSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgChart') }})
    pie_chart: Optional[PieChartSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pieChart') }})
    scorecard_chart: Optional[ScorecardChartSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scorecardChart') }})
    sort_specs: Optional[List[SortSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortSpecs') }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitle') }})
    subtitle_text_format: Optional[TextFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitleTextFormat') }})
    subtitle_text_position: Optional[TextPosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitleTextPosition') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    title_text_format: Optional[TextFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('titleTextFormat') }})
    title_text_position: Optional[TextPosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('titleTextPosition') }})
    treemap_chart: Optional[TreemapChartSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('treemapChart') }})
    waterfall_chart: Optional[WaterfallChartSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waterfallChart') }})
    
