from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SearchAnalyticsQueryRequestAggregationTypeEnum(str, Enum):
    AUTO = "AUTO"
    BY_PROPERTY = "BY_PROPERTY"
    BY_PAGE = "BY_PAGE"

class SearchAnalyticsQueryRequestDataStateEnum(str, Enum):
    DATA_STATE_UNSPECIFIED = "DATA_STATE_UNSPECIFIED"
    FINAL = "FINAL"
    ALL = "ALL"

class SearchAnalyticsQueryRequestDimensionsEnum(str, Enum):
    DATE = "DATE"
    QUERY = "QUERY"
    PAGE = "PAGE"
    COUNTRY = "COUNTRY"
    DEVICE = "DEVICE"
    SEARCH_APPEARANCE = "SEARCH_APPEARANCE"

class SearchAnalyticsQueryRequestSearchTypeEnum(str, Enum):
    WEB = "WEB"
    IMAGE = "IMAGE"
    VIDEO = "VIDEO"
    NEWS = "NEWS"
    DISCOVER = "DISCOVER"
    GOOGLE_NEWS = "GOOGLE_NEWS"

class SearchAnalyticsQueryRequestTypeEnum(str, Enum):
    WEB = "WEB"
    IMAGE = "IMAGE"
    VIDEO = "VIDEO"
    NEWS = "NEWS"
    DISCOVER = "DISCOVER"
    GOOGLE_NEWS = "GOOGLE_NEWS"


@dataclass_json
@dataclass
class SearchAnalyticsQueryRequest:
    aggregation_type: Optional[SearchAnalyticsQueryRequestAggregationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationType') }})
    data_state: Optional[SearchAnalyticsQueryRequestDataStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataState') }})
    dimension_filter_groups: Optional[List[APIDimensionFilterGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilterGroups') }})
    dimensions: Optional[List[SearchAnalyticsQueryRequestDimensionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    row_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowLimit') }})
    search_type: Optional[SearchAnalyticsQueryRequestSearchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchType') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    start_row: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startRow') }})
    type: Optional[SearchAnalyticsQueryRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
