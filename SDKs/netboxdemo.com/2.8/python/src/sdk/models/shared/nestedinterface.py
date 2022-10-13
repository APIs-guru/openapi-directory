from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import nesteddevice

class NestedInterfaceConnectionStatusLabelEnum(str, Enum):
    NOT_CONNECTED = "Not Connected"
    CONNECTED = "Connected"


@dataclass_json
@dataclass
class NestedInterfaceConnectionStatusConnectionStatus:
    label: NestedInterfaceConnectionStatusLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class NestedInterface:
    cable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cable' }})
    connection_status: Optional[NestedInterfaceConnectionStatusConnectionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection_status' }})
    device: Optional[nesteddevice.NestedDevice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
