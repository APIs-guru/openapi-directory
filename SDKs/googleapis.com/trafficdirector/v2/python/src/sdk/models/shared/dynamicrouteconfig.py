from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DynamicRouteConfig:
    last_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdated' }})
    route_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeConfig' }})
    version_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionInfo' }})
    
