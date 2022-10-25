from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import nestedinterface
from . import nestedinterface

class InterfaceConnectionConnectionStatusLabelEnum(str, Enum):
    NOT_CONNECTED = "Not Connected"
    CONNECTED = "Connected"


@dataclass_json
@dataclass
class InterfaceConnectionConnectionStatus:
    label: InterfaceConnectionConnectionStatusLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class InterfaceConnection:
    connection_status: Optional[InterfaceConnectionConnectionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection_status' }})
    interface_a: Optional[nestedinterface.NestedInterface] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interface_a' }})
    interface_b: nestedinterface.NestedInterface = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interface_b' }})
    
