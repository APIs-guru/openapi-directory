from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NetworkUnblockResponseOk:
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    unblocked_until: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unblocked_until' }})
    
