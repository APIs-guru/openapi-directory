from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import categoryeditfields


@dataclass_json
@dataclass
class CategoryEdit:
    category: Optional[categoryeditfields.CategoryEditFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    
