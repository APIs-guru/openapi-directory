from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PivotGroupLimit:
    apply_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applyOrder' }})
    count_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countLimit' }})
    
