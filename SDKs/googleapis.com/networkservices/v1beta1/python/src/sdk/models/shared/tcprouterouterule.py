from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tcprouterouteaction
from . import tcprouteroutematch


@dataclass_json
@dataclass
class TCPRouteRouteRule:
    action: Optional[tcprouterouteaction.TCPRouteRouteAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    matches: Optional[List[tcprouteroutematch.TCPRouteRouteMatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matches' }})
    
