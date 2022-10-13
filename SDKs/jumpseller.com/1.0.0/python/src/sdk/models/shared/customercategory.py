from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customercategoryfields


@dataclass_json
@dataclass
class CustomerCategory:
    category: Optional[customercategoryfields.CustomerCategoryFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    
