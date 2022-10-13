from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import category


@dataclass_json
@dataclass
class ListBusinessCategoriesResponse:
    categories: Optional[List[category.Category]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_category_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCategoryCount' }})
    
