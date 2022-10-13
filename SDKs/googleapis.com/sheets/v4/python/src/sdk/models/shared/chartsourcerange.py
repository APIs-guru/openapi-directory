from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gridrange


@dataclass_json
@dataclass
class ChartSourceRange:
    sources: Optional[List[gridrange.GridRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    
