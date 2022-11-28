from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TimeSeriesFilterRatio:
    r"""TimeSeriesFilterRatio
    A pair of time series filters that define a ratio computation. The output time series is the pair-wise division of each aligned element from the numerator and denominator time series.
    """
    
    denominator: Optional[RatioPart] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denominator') }})
    numerator: Optional[RatioPart] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numerator') }})
    pick_time_series_filter: Optional[PickTimeSeriesFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickTimeSeriesFilter') }})
    secondary_aggregation: Optional[Aggregation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryAggregation') }})
    statistical_time_series_filter: Optional[StatisticalTimeSeriesFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statisticalTimeSeriesFilter') }})
    
