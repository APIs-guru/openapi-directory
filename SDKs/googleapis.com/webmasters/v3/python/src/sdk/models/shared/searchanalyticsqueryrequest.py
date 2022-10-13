from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apidimensionfiltergroup


@dataclass_json
@dataclass
class SearchAnalyticsQueryRequest:
    aggregation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregationType' }})
    data_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataState' }})
    dimension_filter_groups: Optional[List[apidimensionfiltergroup.APIDimensionFilterGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionFilterGroups' }})
    dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    row_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowLimit' }})
    search_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchType' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    start_row: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startRow' }})
    
