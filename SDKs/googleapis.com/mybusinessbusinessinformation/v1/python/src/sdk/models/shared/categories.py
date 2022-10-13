from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import category
from . import category


@dataclass_json
@dataclass
class Categories:
    additional_categories: Optional[List[category.Category]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalCategories' }})
    primary_category: Optional[category.Category] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryCategory' }})
    
