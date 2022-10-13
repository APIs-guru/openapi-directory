from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nestedconsoleserverport
from . import nesteddevice


@dataclass_json
@dataclass
class ConsolePort:
    connection_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection_status' }})
    cs_port: Optional[nestedconsoleserverport.NestedConsoleServerPort] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cs_port' }})
    device: nesteddevice.NestedDevice = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
