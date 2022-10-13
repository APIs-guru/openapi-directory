from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gaugeview
from . import sparkchartview
from . import threshold
from . import timeseriesquery


@dataclass_json
@dataclass
class Scorecard:
    gauge_view: Optional[gaugeview.GaugeView] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gaugeView' }})
    spark_chart_view: Optional[sparkchartview.SparkChartView] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sparkChartView' }})
    thresholds: Optional[List[threshold.Threshold]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thresholds' }})
    time_series_query: Optional[timeseriesquery.TimeSeriesQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesQuery' }})
    
