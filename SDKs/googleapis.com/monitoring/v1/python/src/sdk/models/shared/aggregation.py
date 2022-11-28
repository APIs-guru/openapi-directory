from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AggregationCrossSeriesReducerEnum(str, Enum):
    REDUCE_NONE = "REDUCE_NONE"
    REDUCE_MEAN = "REDUCE_MEAN"
    REDUCE_MIN = "REDUCE_MIN"
    REDUCE_MAX = "REDUCE_MAX"
    REDUCE_SUM = "REDUCE_SUM"
    REDUCE_STDDEV = "REDUCE_STDDEV"
    REDUCE_COUNT = "REDUCE_COUNT"
    REDUCE_COUNT_TRUE = "REDUCE_COUNT_TRUE"
    REDUCE_COUNT_FALSE = "REDUCE_COUNT_FALSE"
    REDUCE_FRACTION_TRUE = "REDUCE_FRACTION_TRUE"
    REDUCE_PERCENTILE_99 = "REDUCE_PERCENTILE_99"
    REDUCE_PERCENTILE_95 = "REDUCE_PERCENTILE_95"
    REDUCE_PERCENTILE_50 = "REDUCE_PERCENTILE_50"
    REDUCE_PERCENTILE_05 = "REDUCE_PERCENTILE_05"

class AggregationPerSeriesAlignerEnum(str, Enum):
    ALIGN_NONE = "ALIGN_NONE"
    ALIGN_DELTA = "ALIGN_DELTA"
    ALIGN_RATE = "ALIGN_RATE"
    ALIGN_INTERPOLATE = "ALIGN_INTERPOLATE"
    ALIGN_NEXT_OLDER = "ALIGN_NEXT_OLDER"
    ALIGN_MIN = "ALIGN_MIN"
    ALIGN_MAX = "ALIGN_MAX"
    ALIGN_MEAN = "ALIGN_MEAN"
    ALIGN_COUNT = "ALIGN_COUNT"
    ALIGN_SUM = "ALIGN_SUM"
    ALIGN_STDDEV = "ALIGN_STDDEV"
    ALIGN_COUNT_TRUE = "ALIGN_COUNT_TRUE"
    ALIGN_COUNT_FALSE = "ALIGN_COUNT_FALSE"
    ALIGN_FRACTION_TRUE = "ALIGN_FRACTION_TRUE"
    ALIGN_PERCENTILE_99 = "ALIGN_PERCENTILE_99"
    ALIGN_PERCENTILE_95 = "ALIGN_PERCENTILE_95"
    ALIGN_PERCENTILE_50 = "ALIGN_PERCENTILE_50"
    ALIGN_PERCENTILE_05 = "ALIGN_PERCENTILE_05"
    ALIGN_PERCENT_CHANGE = "ALIGN_PERCENT_CHANGE"


@dataclass_json
@dataclass
class Aggregation:
    r"""Aggregation
    Describes how to combine multiple time series to provide a different view of the data. Aggregation of time series is done in two steps. First, each time series in the set is aligned to the same time interval boundaries, then the set of time series is optionally reduced in number.Alignment consists of applying the per_series_aligner operation to each time series after its data has been divided into regular alignment_period time intervals. This process takes all of the data points in an alignment period, applies a mathematical transformation such as averaging, minimum, maximum, delta, etc., and converts them into a single data point per period.Reduction is when the aligned and transformed time series can optionally be combined, reducing the number of time series through similar mathematical transformations. Reduction involves applying a cross_series_reducer to all the time series, optionally sorting the time series into subsets with group_by_fields, and applying the reducer to each subset.The raw time series data can contain a huge amount of information from multiple sources. Alignment and reduction transforms this mass of data into a more manageable and representative collection of data, for example \"the 95% latency across the average of all tasks in a cluster\". This representative data can be more easily graphed and comprehended, and the individual time series data is still available for later drilldown. For more details, see Filtering and aggregation (https://cloud.google.com/monitoring/api/v3/aggregation).
    """
    
    alignment_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alignmentPeriod') }})
    cross_series_reducer: Optional[AggregationCrossSeriesReducerEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crossSeriesReducer') }})
    group_by_fields: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupByFields') }})
    per_series_aligner: Optional[AggregationPerSeriesAlignerEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perSeriesAligner') }})
    
