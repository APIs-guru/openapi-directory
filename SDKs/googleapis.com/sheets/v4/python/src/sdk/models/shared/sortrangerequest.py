from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gridrange
from . import sortspec


@dataclass_json
@dataclass
class SortRangeRequest:
    range: Optional[gridrange.GridRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    sort_specs: Optional[List[sortspec.SortSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortSpecs' }})
    
