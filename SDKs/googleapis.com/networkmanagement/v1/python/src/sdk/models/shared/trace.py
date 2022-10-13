from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import endpointinfo
from . import step


@dataclass_json
@dataclass
class Trace:
    endpoint_info: Optional[endpointinfo.EndpointInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointInfo' }})
    steps: Optional[List[step.Step]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    
