from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tlsrouterouteaction
from . import tlsrouteroutematch


@dataclass_json
@dataclass
class TLSRouteRouteRule:
    action: Optional[tlsrouterouteaction.TLSRouteRouteAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    matches: Optional[List[tlsrouteroutematch.TLSRouteRouteMatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matches' }})
    
