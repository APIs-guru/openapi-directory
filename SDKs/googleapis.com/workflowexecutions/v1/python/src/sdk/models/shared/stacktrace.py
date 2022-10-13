from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import stacktraceelement


@dataclass_json
@dataclass
class StackTrace:
    elements: Optional[List[stacktraceelement.StackTraceElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elements' }})
    
