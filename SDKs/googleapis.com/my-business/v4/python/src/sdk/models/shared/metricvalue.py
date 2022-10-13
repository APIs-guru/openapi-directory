from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dimensionalmetricvalue
from . import dimensionalmetricvalue

class MetricValueMetricEnum(str, Enum):
    METRIC_UNSPECIFIED = "METRIC_UNSPECIFIED"
    ALL = "ALL"
    QUERIES_DIRECT = "QUERIES_DIRECT"
    QUERIES_INDIRECT = "QUERIES_INDIRECT"
    QUERIES_CHAIN = "QUERIES_CHAIN"
    VIEWS_MAPS = "VIEWS_MAPS"
    VIEWS_SEARCH = "VIEWS_SEARCH"
    ACTIONS_WEBSITE = "ACTIONS_WEBSITE"
    ACTIONS_PHONE = "ACTIONS_PHONE"
    ACTIONS_DRIVING_DIRECTIONS = "ACTIONS_DRIVING_DIRECTIONS"
    PHOTOS_VIEWS_MERCHANT = "PHOTOS_VIEWS_MERCHANT"
    PHOTOS_VIEWS_CUSTOMERS = "PHOTOS_VIEWS_CUSTOMERS"
    PHOTOS_COUNT_MERCHANT = "PHOTOS_COUNT_MERCHANT"
    PHOTOS_COUNT_CUSTOMERS = "PHOTOS_COUNT_CUSTOMERS"
    LOCAL_POST_VIEWS_SEARCH = "LOCAL_POST_VIEWS_SEARCH"
    LOCAL_POST_ACTIONS_CALL_TO_ACTION = "LOCAL_POST_ACTIONS_CALL_TO_ACTION"


@dataclass_json
@dataclass
class MetricValue:
    dimensional_values: Optional[List[dimensionalmetricvalue.DimensionalMetricValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionalValues' }})
    metric: Optional[MetricValueMetricEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    total_value: Optional[dimensionalmetricvalue.DimensionalMetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalValue' }})
    
