from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Pagination:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    current_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentUrl' }})
    max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    next_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextUrl' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    page_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageNum' }})
    previous_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousUrl' }})
    sort: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    total_pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPages' }})
    
