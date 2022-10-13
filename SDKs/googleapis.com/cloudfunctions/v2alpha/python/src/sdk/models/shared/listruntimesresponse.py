from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import runtime


@dataclass_json
@dataclass
class ListRuntimesResponse:
    runtimes: Optional[List[runtime.Runtime]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimes' }})
    
