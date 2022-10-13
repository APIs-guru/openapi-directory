from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InlineScopedRouteConfigs:
    last_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdated' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    scoped_route_configs: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopedRouteConfigs' }})
    
