from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datatypefield


@dataclass_json
@dataclass
class DataType:
    field: Optional[List[datatypefield.DataTypeField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
