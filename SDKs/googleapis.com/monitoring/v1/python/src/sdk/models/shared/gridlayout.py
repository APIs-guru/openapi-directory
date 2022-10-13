from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import widget


@dataclass_json
@dataclass
class GridLayout:
    columns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    widgets: Optional[List[widget.Widget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'widgets' }})
    
