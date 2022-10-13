from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import selection


@dataclass_json
@dataclass
class SelectionList:
    values: Optional[List[selection.Selection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
