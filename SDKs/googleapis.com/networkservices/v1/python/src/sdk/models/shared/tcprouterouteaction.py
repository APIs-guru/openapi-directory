from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tcprouteroutedestination


@dataclass_json
@dataclass
class TCPRouteRouteAction:
    destinations: Optional[List[tcprouteroutedestination.TCPRouteRouteDestination]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    original_destination: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalDestination' }})
    
