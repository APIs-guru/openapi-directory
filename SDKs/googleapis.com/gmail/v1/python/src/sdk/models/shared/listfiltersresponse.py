from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filter


@dataclass_json
@dataclass
class ListFiltersResponse:
    filter: Optional[List[filter.Filter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    
