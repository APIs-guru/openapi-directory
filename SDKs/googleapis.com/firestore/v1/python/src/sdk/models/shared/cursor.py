from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import value


@dataclass_json
@dataclass
class Cursor:
    before: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'before' }})
    values: Optional[List[value.Value]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
