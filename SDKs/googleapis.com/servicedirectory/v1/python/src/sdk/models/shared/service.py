from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import endpoint


@dataclass_json
@dataclass
class Service:
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    endpoints: Optional[List[endpoint.Endpoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoints' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
