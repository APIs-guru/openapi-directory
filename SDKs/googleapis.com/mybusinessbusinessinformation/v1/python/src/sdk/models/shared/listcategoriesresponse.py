from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import category


@dataclass_json
@dataclass
class ListCategoriesResponse:
    categories: Optional[List[category.Category]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
