from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Gke:
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespace' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    
