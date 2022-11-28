from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Scorecard:
    r"""Scorecard
    A widget showing the latest value of a metric, and how this value relates to one or more thresholds.
    """
    
    gauge_view: Optional[GaugeView] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gaugeView') }})
    spark_chart_view: Optional[SparkChartView] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkChartView') }})
    thresholds: Optional[List[Threshold]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholds') }})
    time_series_query: Optional[TimeSeriesQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeriesQuery') }})
    
