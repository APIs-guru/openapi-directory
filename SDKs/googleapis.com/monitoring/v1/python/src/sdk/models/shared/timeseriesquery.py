from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TimeSeriesQuery:
    r"""TimeSeriesQuery
    TimeSeriesQuery collects the set of supported methods for querying time series data from the Stackdriver metrics API.
    """
    
    prometheus_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prometheusQuery') }})
    time_series_filter: Optional[TimeSeriesFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeriesFilter') }})
    time_series_filter_ratio: Optional[TimeSeriesFilterRatio] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeriesFilterRatio') }})
    time_series_query_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeriesQueryLanguage') }})
    unit_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitOverride') }})
    
