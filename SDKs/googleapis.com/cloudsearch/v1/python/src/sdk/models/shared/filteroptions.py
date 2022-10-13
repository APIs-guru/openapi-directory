from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import filter


@dataclass_json
@dataclass
class FilterOptions:
    filter: Optional[filter.Filter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectType' }})
    
