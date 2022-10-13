from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import categoryfields


@dataclass_json
@dataclass
class Category:
    category: Optional[categoryfields.CategoryFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    
