from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import categorydto


@dataclass_json
@dataclass
class CategoryResponse:
    categories: List[categorydto.CategoryDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    
