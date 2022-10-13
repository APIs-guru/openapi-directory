from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import latencycriteria


@dataclass_json
@dataclass
class BasicSli:
    availability: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availability' }})
    latency: Optional[latencycriteria.LatencyCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latency' }})
    location: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    method: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    version: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
