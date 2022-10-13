from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pipe
from . import socketaddress


@dataclass_json
@dataclass
class Address:
    pipe: Optional[pipe.Pipe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipe' }})
    socket_address: Optional[socketaddress.SocketAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'socketAddress' }})
    
