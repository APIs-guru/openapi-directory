from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IndexedHotKey:
    sparse_hot_keys: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sparseHotKeys' }})
    
