from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import color
from . import colorstyle
from . import basicchartspec
from . import bubblechartspec
from . import candlestickchartspec
from . import datasourcechartproperties
from . import filterspec
from . import histogramchartspec
from . import orgchartspec
from . import piechartspec
from . import scorecardchartspec
from . import sortspec
from . import textformat
from . import textposition
from . import textformat
from . import textposition
from . import treemapchartspec
from . import waterfallchartspec

class ChartSpecHiddenDimensionStrategyEnum(str, Enum):
    CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED = "CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED"
    SKIP_HIDDEN_ROWS_AND_COLUMNS = "SKIP_HIDDEN_ROWS_AND_COLUMNS"
    SKIP_HIDDEN_ROWS = "SKIP_HIDDEN_ROWS"
    SKIP_HIDDEN_COLUMNS = "SKIP_HIDDEN_COLUMNS"
    SHOW_ALL = "SHOW_ALL"


@dataclass_json
@dataclass
class ChartSpec:
    alt_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'altText' }})
    background_color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundColor' }})
    background_color_style: Optional[colorstyle.ColorStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundColorStyle' }})
    basic_chart: Optional[basicchartspec.BasicChartSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicChart' }})
    bubble_chart: Optional[bubblechartspec.BubbleChartSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bubbleChart' }})
    candlestick_chart: Optional[candlestickchartspec.CandlestickChartSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candlestickChart' }})
    data_source_chart_properties: Optional[datasourcechartproperties.DataSourceChartProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceChartProperties' }})
    filter_specs: Optional[List[filterspec.FilterSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterSpecs' }})
    font_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fontName' }})
    hidden_dimension_strategy: Optional[ChartSpecHiddenDimensionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiddenDimensionStrategy' }})
    histogram_chart: Optional[histogramchartspec.HistogramChartSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'histogramChart' }})
    maximized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximized' }})
    org_chart: Optional[orgchartspec.OrgChartSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgChart' }})
    pie_chart: Optional[piechartspec.PieChartSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pieChart' }})
    scorecard_chart: Optional[scorecardchartspec.ScorecardChartSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scorecardChart' }})
    sort_specs: Optional[List[sortspec.SortSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortSpecs' }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtitle' }})
    subtitle_text_format: Optional[textformat.TextFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtitleTextFormat' }})
    subtitle_text_position: Optional[textposition.TextPosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtitleTextPosition' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    title_text_format: Optional[textformat.TextFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'titleTextFormat' }})
    title_text_position: Optional[textposition.TextPosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'titleTextPosition' }})
    treemap_chart: Optional[treemapchartspec.TreemapChartSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treemapChart' }})
    waterfall_chart: Optional[waterfallchartspec.WaterfallChartSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waterfallChart' }})
    
