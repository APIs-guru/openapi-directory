from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PaginationData:
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    total_elements: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalElements' }})
    total_pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPages' }})
    
