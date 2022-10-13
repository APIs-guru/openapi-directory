from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import status


@dataclass_json
@dataclass
class ProductSet:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    index_error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexError' }})
    index_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
