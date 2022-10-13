from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tracespan


@dataclass_json
@dataclass
class Trace:
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    spans: Optional[List[tracespan.TraceSpan]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spans' }})
    trace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traceId' }})
    
