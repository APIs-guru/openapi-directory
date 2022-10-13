from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AggregationInfoAggregationIntervalEnum(str, Enum):
    AGGREGATION_INTERVAL_UNSPECIFIED = "AGGREGATION_INTERVAL_UNSPECIFIED"
    DAILY = "DAILY"
    MONTHLY = "MONTHLY"

class AggregationInfoAggregationLevelEnum(str, Enum):
    AGGREGATION_LEVEL_UNSPECIFIED = "AGGREGATION_LEVEL_UNSPECIFIED"
    ACCOUNT = "ACCOUNT"
    PROJECT = "PROJECT"


@dataclass_json
@dataclass
class AggregationInfo:
    aggregation_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregationCount' }})
    aggregation_interval: Optional[AggregationInfoAggregationIntervalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregationInterval' }})
    aggregation_level: Optional[AggregationInfoAggregationLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregationLevel' }})
    
