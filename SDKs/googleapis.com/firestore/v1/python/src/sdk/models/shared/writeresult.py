from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import value


@dataclass_json
@dataclass
class WriteResult:
    transform_results: Optional[List[value.Value]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformResults' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
