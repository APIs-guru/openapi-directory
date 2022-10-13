from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import debuggee


@dataclass_json
@dataclass
class ListDebuggeesResponse:
    debuggees: Optional[List[debuggee.Debuggee]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debuggees' }})
    
