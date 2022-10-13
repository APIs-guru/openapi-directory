from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import httproutedestination


@dataclass_json
@dataclass
class HTTPRouteRequestMirrorPolicy:
    destination: Optional[httproutedestination.HTTPRouteDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    
