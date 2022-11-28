from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class StatisticalTimeSeriesFilterRankingMethodEnum(str, Enum):
    METHOD_UNSPECIFIED = "METHOD_UNSPECIFIED"
    METHOD_CLUSTER_OUTLIER = "METHOD_CLUSTER_OUTLIER"


@dataclass_json
@dataclass
class StatisticalTimeSeriesFilter:
    r"""StatisticalTimeSeriesFilter
    A filter that ranks streams based on their statistical relation to other streams in a request. Note: This field is deprecated and completely ignored by the API.
    """
    
    num_time_series: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numTimeSeries') }})
    ranking_method: Optional[StatisticalTimeSeriesFilterRankingMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rankingMethod') }})
    
