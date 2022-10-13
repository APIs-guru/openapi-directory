from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroupFindingsRequest:
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    group_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupBy' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTime' }})
    
