from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customercategoryeditfields


@dataclass_json
@dataclass
class CustomerCategoryEdit:
    category: Optional[customercategoryeditfields.CustomerCategoryEditFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    
