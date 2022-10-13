from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import grpcrouteheadermatch
from . import grpcroutemethodmatch


@dataclass_json
@dataclass
class GrpcRouteRouteMatch:
    headers: Optional[List[grpcrouteheadermatch.GrpcRouteHeaderMatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    method: Optional[grpcroutemethodmatch.GrpcRouteMethodMatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    
