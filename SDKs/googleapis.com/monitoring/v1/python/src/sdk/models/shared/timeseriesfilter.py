from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TimeSeriesFilter:
    r"""TimeSeriesFilter
    A filter that defines a subset of time series data that is displayed in a widget. Time series data is fetched using the ListTimeSeries (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) method.
    """
    
    aggregation: Optional[Aggregation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregation') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    pick_time_series_filter: Optional[PickTimeSeriesFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickTimeSeriesFilter') }})
    secondary_aggregation: Optional[Aggregation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryAggregation') }})
    statistical_time_series_filter: Optional[StatisticalTimeSeriesFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statisticalTimeSeriesFilter') }})
    
