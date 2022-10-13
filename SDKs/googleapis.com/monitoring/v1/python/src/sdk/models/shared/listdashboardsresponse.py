from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dashboard


@dataclass_json
@dataclass
class ListDashboardsResponse:
    dashboards: Optional[List[dashboard.Dashboard]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashboards' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
