from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Write:
    columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table' }})
    values: Optional[List[List[Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
