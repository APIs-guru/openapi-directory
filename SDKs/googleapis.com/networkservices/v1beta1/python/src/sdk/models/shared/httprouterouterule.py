from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import httprouterouteaction
from . import httprouteroutematch


@dataclass_json
@dataclass
class HTTPRouteRouteRule:
    action: Optional[httprouterouteaction.HTTPRouteRouteAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    matches: Optional[List[httprouteroutematch.HTTPRouteRouteMatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matches' }})
    
