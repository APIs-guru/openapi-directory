from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PaginationMeta:
    max_page: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_page' }})
    page: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    total_items: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_items' }})
    
