from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""MetricValue
    A value for a single Metric from a starting time.
    """
    
    dimensional_values: Optional[List[DimensionalMetricValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionalValues') }})
    metric: Optional[MetricValueMetricEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    total_value: Optional[DimensionalMetricValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalValue') }})
    
