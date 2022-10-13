from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nesteddevice


@dataclass_json
@dataclass
class ConsoleServerPort:
    connected_console: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connected_console' }})
    device: nesteddevice.NestedDevice = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
