from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import api
from . import peer
from . import peer
from . import request
from . import resource
from . import response
from . import peer


@dataclass_json
@dataclass
class AttributeContext:
    api: Optional[api.API] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    destination: Optional[peer.Peer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    extensions: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extensions' }})
    origin: Optional[peer.Peer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origin' }})
    request: Optional[request.Request] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request' }})
    resource: Optional[resource.Resource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    response: Optional[response.Response] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    source: Optional[peer.Peer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
