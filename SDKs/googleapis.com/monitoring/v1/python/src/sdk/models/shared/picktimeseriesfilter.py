from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    direction: Optional[PickTimeSeriesFilterDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    num_time_series: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numTimeSeries' }})
    ranking_method: Optional[PickTimeSeriesFilterRankingMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rankingMethod' }})
    
