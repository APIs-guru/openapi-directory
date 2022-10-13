from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import traffictarget


@dataclass_json
@dataclass
class RouteSpec:
    traffic: Optional[List[traffictarget.TrafficTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traffic' }})
    
