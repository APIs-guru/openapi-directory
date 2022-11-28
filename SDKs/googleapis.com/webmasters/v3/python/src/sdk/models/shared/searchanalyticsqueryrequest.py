from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchAnalyticsQueryRequest:
    aggregation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationType') }})
    data_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataState') }})
    dimension_filter_groups: Optional[List[APIDimensionFilterGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilterGroups') }})
    dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    row_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowLimit') }})
    search_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchType') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    start_row: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startRow') }})
    
