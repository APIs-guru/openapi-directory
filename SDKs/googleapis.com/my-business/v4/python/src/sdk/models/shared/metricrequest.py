from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MetricRequestMetricEnum(str, Enum):
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

class MetricRequestOptionsEnum(str, Enum):
    METRIC_OPTION_UNSPECIFIED = "METRIC_OPTION_UNSPECIFIED"
    AGGREGATED_TOTAL = "AGGREGATED_TOTAL"
    AGGREGATED_DAILY = "AGGREGATED_DAILY"
    BREAKDOWN_DAY_OF_WEEK = "BREAKDOWN_DAY_OF_WEEK"
    BREAKDOWN_HOUR_OF_DAY = "BREAKDOWN_HOUR_OF_DAY"


@dataclass_json
@dataclass
class MetricRequest:
    r"""MetricRequest
    A request to return values for one metric and the options for how those values should be returned.
    """
    
    metric: Optional[MetricRequestMetricEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    options: Optional[List[MetricRequestOptionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    
