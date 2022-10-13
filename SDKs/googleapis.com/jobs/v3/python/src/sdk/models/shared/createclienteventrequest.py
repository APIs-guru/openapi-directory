from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import clientevent


@dataclass_json
@dataclass
class CreateClientEventRequest:
    client_event: Optional[clientevent.ClientEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientEvent' }})
    
