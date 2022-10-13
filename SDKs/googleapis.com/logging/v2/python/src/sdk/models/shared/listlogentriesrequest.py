from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListLogEntriesRequest:
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    order_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderBy' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    project_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectIds' }})
    resource_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceNames' }})
    
