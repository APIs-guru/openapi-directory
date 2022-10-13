from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import rotateservercacontext


@dataclass_json
@dataclass
class InstancesRotateServerCaRequest:
    rotate_server_ca_context: Optional[rotateservercacontext.RotateServerCaContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rotateServerCaContext' }})
    
