from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import objectmeta
from . import routespec
from . import routestatus


@dataclass_json
@dataclass
class Route:
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiVersion' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    metadata: Optional[objectmeta.ObjectMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    spec: Optional[routespec.RouteSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    status: Optional[routestatus.RouteStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
