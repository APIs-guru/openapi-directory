from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NetworkUnblock:
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    unblock_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unblock_duration' }})
    
