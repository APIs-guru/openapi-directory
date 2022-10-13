from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import trace


@dataclass_json
@dataclass
class Traces:
    traces: Optional[List[trace.Trace]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traces' }})
    
