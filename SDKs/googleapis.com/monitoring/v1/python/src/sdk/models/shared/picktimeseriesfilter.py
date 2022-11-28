from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PickTimeSeriesFilterDirectionEnum(str, Enum):
    DIRECTION_UNSPECIFIED = "DIRECTION_UNSPECIFIED"
    TOP = "TOP"
    BOTTOM = "BOTTOM"

class PickTimeSeriesFilterRankingMethodEnum(str, Enum):
    METHOD_UNSPECIFIED = "METHOD_UNSPECIFIED"
    METHOD_MEAN = "METHOD_MEAN"
    METHOD_MAX = "METHOD_MAX"
    METHOD_MIN = "METHOD_MIN"
    METHOD_SUM = "METHOD_SUM"
    METHOD_LATEST = "METHOD_LATEST"


@dataclass_json
@dataclass
class PickTimeSeriesFilter:
    r"""PickTimeSeriesFilter
    Describes a ranking-based time series filter. Each input time series is ranked with an aligner. The filter will allow up to num_time_series time series to pass through it, selecting them based on the relative ranking.For example, if ranking_method is METHOD_MEAN,direction is BOTTOM, and num_time_series is 3, then the 3 times series with the lowest mean values will pass through the filter.
    """
    
    direction: Optional[PickTimeSeriesFilterDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    num_time_series: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numTimeSeries') }})
    ranking_method: Optional[PickTimeSeriesFilterRankingMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rankingMethod') }})
    
