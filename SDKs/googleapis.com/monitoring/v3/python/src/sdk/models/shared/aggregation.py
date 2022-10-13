from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

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
    alignment_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alignmentPeriod' }})
    cross_series_reducer: Optional[AggregationCrossSeriesReducerEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crossSeriesReducer' }})
    group_by_fields: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupByFields' }})
    per_series_aligner: Optional[AggregationPerSeriesAlignerEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perSeriesAligner' }})
    
