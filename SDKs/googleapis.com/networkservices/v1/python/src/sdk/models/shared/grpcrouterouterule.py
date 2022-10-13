from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import grpcrouterouteaction
from . import grpcrouteroutematch


@dataclass_json
@dataclass
class GrpcRouteRouteRule:
    action: Optional[grpcrouterouteaction.GrpcRouteRouteAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    matches: Optional[List[grpcrouteroutematch.GrpcRouteRouteMatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matches' }})
    
