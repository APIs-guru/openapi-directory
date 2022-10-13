from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import widget


@dataclass_json
@dataclass
class Column:
    weight: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    widgets: Optional[List[widget.Widget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'widgets' }})
    
