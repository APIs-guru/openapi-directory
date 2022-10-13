from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class StatisticalTimeSeriesFilterRankingMethodEnum(str, Enum):
    METHOD_UNSPECIFIED = "METHOD_UNSPECIFIED"
    METHOD_CLUSTER_OUTLIER = "METHOD_CLUSTER_OUTLIER"


@dataclass_json
@dataclass
class StatisticalTimeSeriesFilter:
    num_time_series: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numTimeSeries' }})
    ranking_method: Optional[StatisticalTimeSeriesFilterRankingMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rankingMethod' }})
    
