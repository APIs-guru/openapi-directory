from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apidimensionfilter


@dataclass_json
@dataclass
class APIDimensionFilterGroup:
    filters: Optional[List[apidimensionfilter.APIDimensionFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    group_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupType' }})
    
