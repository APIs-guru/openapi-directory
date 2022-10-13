from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import label


@dataclass_json
@dataclass
class FreeFormServiceItem:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    label: Optional[label.Label] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    
