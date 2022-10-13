from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import responseinfo
from . import routeresponsepath


@dataclass_json
@dataclass
class RouteResponse:
    info: Optional[responseinfo.ResponseInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    paths: Optional[List[routeresponsepath.RouteResponsePath]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paths' }})
    
